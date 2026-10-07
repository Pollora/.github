# Security Policy

This policy applies to every repository of the
[Pollora organization](https://github.com/Pollora) that does not ship its own
`SECURITY.md`.

## Supported versions

Only the latest release of each package receives security fixes. For the
framework and the skeleton, that is the latest 13.x release.

## Reporting a vulnerability

**Do not open a public issue.**

Use **Report a vulnerability** in the **Security** tab of the repository
concerned, which opens a private GitHub Security Advisory. If you are unsure
which repository is affected, report it to
[Pollora/framework](https://github.com/Pollora/framework/security/advisories/new):
we will route it. Do not let the question delay the report. If GitHub Security
Advisories are not available to you, write to `dev@amphibee.fr`.

You can expect:

- An acknowledgment within **48 hours**
- A status update within **7 days**
- A fix released as a patch version as soon as possible

Please include the versions involved (the output of `composer show pollora/*`),
PHP and WordPress versions, and the steps to reproduce.

Thank you for helping keep Pollora secure.
