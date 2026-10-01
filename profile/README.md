<p align="center">
  <a href="https://pollora.dev">
    <img src="https://raw.githubusercontent.com/Pollora/pollora.dev/main/src/assets/pollora-logo.svg" width="320" alt="Pollora">
  </a>
</p>

<h3 align="center">The Laravel framework for WordPress</h3>

<p align="center">
  WordPress runs inside a Laravel application: Laravel routing, controllers, Blade and Eloquent on the front end,<br>
  the WordPress admin, database and plugins untouched. Hooks, post types, taxonomies and REST routes are PHP 8 attributes, found by auto-discovery.
</p>

<p align="center">
  <a href="https://pollora.dev"><strong>pollora.dev</strong></a> ·
  <a href="https://pollora.dev/getting-started/installation/"><strong>Documentation</strong></a> ·
  <a href="https://pollora.dev/compare/"><strong>How Pollora compares</strong></a> ·
  <a href="https://www.youtube.com/watch?v=Wk1VzPapqM8"><strong>1-minute tour</strong></a>
</p>

```bash
composer global require pollora/cli
pollora new example-app --ddev
```

Requires PHP 8.4+ for a new project, Laravel 13.34 and WordPress 7.1+. Current release: v13.34.0. MIT licensed.

| Repository | What it is |
|---|---|
| [framework](https://github.com/Pollora/framework) | The framework itself (`pollora/framework`) |
| [pollora](https://github.com/Pollora/pollora) | The skeleton `composer create-project` installs |
| [cli](https://github.com/Pollora/cli) | `pollora new`, with optional DDEV setup |
| [nectar](https://github.com/Pollora/nectar) | AI context for coding agents: guidelines, skills and MCP tools on Laravel Boost |
| [documentation](https://github.com/Pollora/documentation) | Source of the docs published on pollora.dev |
| [Query](https://github.com/Pollora/Query) · [hook](https://github.com/Pollora/hook) · [option](https://github.com/Pollora/option) · [ajax](https://github.com/Pollora/ajax) · [abilities](https://github.com/Pollora/abilities) | Standalone packages used by the framework |
| [theme-default](https://github.com/Pollora/theme-default) · [theme-apiary](https://github.com/Pollora/theme-apiary) · [theme-buzz](https://github.com/Pollora/theme-buzz) | Themes (Blade, Vite, Tailwind CSS) |

Questions and ideas: [GitHub Discussions](https://github.com/Pollora/pollora/discussions). Bugs: [issues on Pollora/framework](https://github.com/Pollora/framework/issues). Maintained by [AmphiBee](https://amphibee.fr).

Pollora builds on the work of [Roots](https://roots.io) (Bedrock, Sage, Acorn, `@roots/vite-plugin`), a constant source of inspiration, and on [Corcel](https://github.com/corcel/corcel), which its WordPress models fork.
