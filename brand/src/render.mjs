// Renders the Pollora card family: a social preview (cards/<repo>.png, 1280 × 640)
// and a README banner (banners/<repo>.png, 1280 × 400) for every entry of repos.json.
// Needs Playwright with Chromium and the Space Grotesk and JetBrains Mono fonts installed.
// Run: node brand/src/render.mjs [repo …]   (PLAYWRIGHT=/path/to/playwright, CHROMIUM=/path/to/chrome)
import { readFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT ?? 'playwright');

const src = new URL('./', import.meta.url).pathname;
const out = new URL('../', import.meta.url).pathname;
const { families, repos } = JSON.parse(readFileSync(src + 'repos.json', 'utf8'));
const template = readFileSync(src + 'card.html', 'utf8');

const dataUri = (file) => {
	const type = file.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
	return `data:${type};base64,${readFileSync(src + 'assets/' + file).toString('base64')}`;
};
const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const only = process.argv.slice(2);
const selected = only.length ? repos.filter((r) => only.includes(r.repo)) : repos;
// The banner is rendered at 2× so it stays sharp on high-density screens.
const formats = { card: [1280, 640, 1, 'cards'], banner: [1280, 400, 2, 'banners'] };

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});

for (const repo of selected) {
	const family = families[repo.family];
	const visual = repo.screenshot
		? `<div class="shot"><div class="chrome"><i></i><i></i><i></i></div><img src="${dataUri(repo.screenshot)}" alt=""></div>`
		: `<img class="mascot" src="${dataUri(family.mascot)}" alt="">`;
	const name = escape(repo.name) + (repo.accent ? `${repo.join || repo.accent.startsWith('.') ? '' : ' '}<span class="accent">${escape(repo.accent)}</span>` : '<span class="accent">.</span>');
	const url = repo.repo === 'profile' ? 'pollora.dev' : `github.com/Pollora/${repo.repo}`;

	for (const [format, [width, height, scale, dir]] of Object.entries(formats)) {
		const page = await browser.newPage({ deviceScaleFactor: scale, viewport: { width, height } });
		const html = template
			.replace('{{format}}', `${format} family-${repo.family}`)
			.replace('{{visual}}', visual)
			.replace('{{logo}}', dataUri('pollora-logo.svg'))
			.replace('{{family}}', escape(family.label))
			.replace('{{name}}', name)
			.replace('{{tagline}}', escape(repo.tagline))
			.replace('{{command}}', escape(repo.command ?? ''))
			.replace('{{url}}', url);
		await page.setContent(html, { waitUntil: 'load' });
		if (!repo.command) {
			await page.evaluate(() => document.querySelector('.command')?.remove());
		}
		mkdirSync(out + dir, { recursive: true });
		await page.screenshot({ path: `${out}${dir}/${repo.repo}.png`, omitBackground: false });
		await page.close();
	}
	console.log(`${repo.repo}: cards/${repo.repo}.png, banners/${repo.repo}.png`);
}

await browser.close();
