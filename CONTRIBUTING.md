# Contributing to Pollora

Thank you for taking the time to contribute. This guide applies to every
repository of the [Pollora organization](https://github.com/Pollora) that does
not ship its own `CONTRIBUTING.md`. The framework and the skeleton do, so read
theirs when you work there.

## Am I in the right repository?

| You want to change | Repository |
|---|---|
| Routing, hooks, attributes, discovery, the themes API: the framework itself | [Pollora/framework](https://github.com/Pollora/framework) |
| The application skeleton and its installer | [Pollora/pollora](https://github.com/Pollora/pollora) |
| `pollora new` and the DDEV setup | [Pollora/cli](https://github.com/Pollora/cli) |
| The documentation published on [pollora.dev](https://pollora.dev) | [Pollora/documentation](https://github.com/Pollora/documentation). Never edit the website repository, it is overwritten on sync |
| A standalone package, a theme or a plugin | the repository of that package |

If you are unsure, open an issue where you think it belongs and we will route
it. A misfiled issue costs nobody anything.

## Which branch?

- **[Pollora/framework](https://github.com/Pollora/framework)** uses Gitflow:
  branch from `develop` and target `develop`. `main` only receives releases.
- **Every other repository**: branch from `main` and target `main`.

Name your branch for what it does: `feature/…`, `fix/…`, `docs/…`, `chore/…`.
Commit messages follow [Conventional Commits](https://www.conventionalcommits.org)
(`fix: `, `feat: `, `docs: `, `chore: `…), which is what the changelogs are
written from.

## Checking your change

Every package has its tests next to its code. Run them before you push:

```bash
composer install
composer test          # or vendor/bin/pest
vendor/bin/pint        # code style
```

Themes and plugins are built with Vite: `npm install && npm run build` must
succeed.

## Opening the pull request

1. Push your branch to your fork and open a pull request against the branch
   named above.
2. Say **how to test it**: the command, the page, or the scenario that shows the
   change working. This is the single most useful thing in a description.
3. Add a line to `CHANGELOG.md` under `[Unreleased]` when the repository has
   one.

## Reporting a bug

Open an issue with the steps to reproduce, what you expected and what happened,
and the versions involved (`composer show pollora/framework`, PHP and
WordPress).

## Security

Never report a vulnerability in a public issue. See [SECURITY.md](SECURITY.md).

## Code of Conduct

Participation is covered by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions

Ideas and questions go to [GitHub Discussions](https://github.com/Pollora/pollora/discussions).
