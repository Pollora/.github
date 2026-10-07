<p align="center">
  <a href="https://pollora.dev">
    <img src="https://raw.githubusercontent.com/Pollora/.github/main/brand/banners/profile.png" width="100%" alt="Pollora, the Laravel framework for WordPress">
  </a>
</p>

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

```php
#[PostType('book')]
#[HasArchive]
class Book {}

class Seo
{
    #[Action('wp_head', priority: 1)]
    public function metaDescription(): void { /* … */ }
}
```

A new project needs PHP 8.4+ and WordPress 7.1+. Current release: [v13.35.1](https://github.com/Pollora/framework/releases/tag/v13.35.1), on Laravel 13.35. Everything is open source.

### Core

| | |
|---|---|
| [framework](https://github.com/Pollora/framework) | The framework itself, `pollora/framework` |
| [pollora](https://github.com/Pollora/pollora) | The skeleton `composer create-project pollora/pollora` installs |
| [cli](https://github.com/Pollora/cli) | `pollora new`, with an optional DDEV environment |
| [documentation](https://github.com/Pollora/documentation) | Source of the docs published on [pollora.dev](https://pollora.dev) |

### Packages

The framework is built from these, and each one works on its own.

| | |
|---|---|
| [colt](https://github.com/Pollora/colt) | Eloquent models for WordPress data (a fork of Corcel) |
| [Query](https://github.com/Pollora/Query) | `WP_Query`, the fluent way |
| [WordPressEntity](https://github.com/Pollora/WordPressEntity) | Post types and taxonomies in a fluent API |
| [WordPressArguments](https://github.com/Pollora/WordPressArguments) | WordPress arguments as typed objects |
| [hook](https://github.com/Pollora/hook) · [option](https://github.com/Pollora/option) · [ajax](https://github.com/Pollora/ajax) | Actions and filters, options, AJAX actions |
| [Helper-Overrider](https://github.com/Pollora/Helper-Overrider) | One `__()` for Laravel and WordPress translations |

### AI

| | |
|---|---|
| [nectar](https://github.com/Pollora/nectar) | Guidelines, skills and MCP tools that teach coding agents Pollora, on Laravel Boost |
| [abilities](https://github.com/Pollora/abilities) | The WordPress Abilities API, the Laravel way |
| [McpConnector](https://github.com/Pollora/McpConnector) | WordPress content as MCP tools, with OAuth 2.1 built in |
| [AiVisibility](https://github.com/Pollora/AiVisibility) | `llms.txt`, Markdown endpoints and AI directives |

### Themes and plugins

| | |
|---|---|
| [theme-default](https://github.com/Pollora/theme-default) | Starter: Blade, Vite and Tailwind CSS v4 |
| [theme-apiary](https://github.com/Pollora/theme-apiary) | Apiary: a complete WooCommerce theme |
| [theme-buzz](https://github.com/Pollora/theme-buzz) | Buzz: a Full Site Editing magazine theme |
| [plugin-default](https://github.com/Pollora/plugin-default) | The template behind `pollora:make:plugin` |
| [portcullis](https://github.com/Pollora/portcullis) | A secret login URL and brute-force lockouts |
| [MeiliFacets](https://github.com/Pollora/MeiliFacets) | Filters, facets and suggestions with Meilisearch |

Questions and ideas: [GitHub Discussions](https://github.com/Pollora/pollora/discussions). Bugs: the issues of the repository concerned. Contributing: [the guide](https://github.com/Pollora/.github/blob/main/CONTRIBUTING.md).

Maintained by [AmphiBee](https://amphibee.fr), © [RuBee group](https://rubee.group). Pollora builds on the work of [Roots](https://roots.io) (Bedrock, Sage, Acorn, `@roots/vite-plugin`), a constant source of inspiration, and on [Corcel](https://github.com/corcel/corcel), which its WordPress models fork.
