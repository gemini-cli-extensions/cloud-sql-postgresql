# Changelog

## [0.4.0](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.3.0...0.4.0) (2026-04-14)


### ⚠ BREAKING CHANGES

* update repo name ([mcp-toolbox#​2968](https://redirect.github.com/googleapis/mcp-toolbox/issues/2968))

### Features

* **cloudsqlpg:** Run `SELECT 1` after successful connection attempt ([mcp-toolbox#​2997](https://redirect.github.com/googleapis/mcp-toolbox/issues/2997)) ([6ed9700](https://redirect.github.com/googleapis/mcp-toolbox/commit/6ed9700e15f08b31e65eb0afa605f4a8ea937e66)) ([7e70dc8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/7e70dc8fefdb76fc24004adabbaf21d64d0c5c6e))
* **skills:** Add Claude Code support to generated scripts ([mcp-toolbox#​2966](https://redirect.github.com/googleapis/mcp-toolbox/issues/2966)) ([a1609e1](https://redirect.github.com/googleapis/mcp-toolbox/commit/a1609e10a2eaf4ea68eae36acec3eed355b8a052)) ([d210a15](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/d210a15ca1a965da6a22ba43b62d3b657806777f))
* **skills:** Add codex user agent ([mcp-toolbox#​2973](https://redirect.github.com/googleapis/mcp-toolbox/issues/2973)) ([070e939](https://redirect.github.com/googleapis/mcp-toolbox/commit/070e9399c02f088d43175ce6bf343378beb7f584)) ([d210a15](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/d210a15ca1a965da6a22ba43b62d3b657806777f))
* **skills:** Tool invocation via npx ([mcp-toolbox#​2916](https://redirect.github.com/googleapis/mcp-toolbox/issues/2916)) ([377dc5b](https://redirect.github.com/googleapis/mcp-toolbox/commit/377dc5b00145a0044eef39314dd6b0ef5966fcd7)) ([d210a15](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/d210a15ca1a965da6a22ba43b62d3b657806777f))
* add claude code plugin config ([#137](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/137)) ([c3392b3](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/c3392b31686173ea6f62ec575ad58952dd06140b))
* add codex plugin config ([#138](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/138)) ([071d0ec](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/071d0ec09d631ba3665ef2b2bad6a6dde76796ba))
* add new vectorassist skills ([#159](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/159)) ([03874ac](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/03874acfa9570b854df59af4c7458b9d8fa3308e))
* **skills:** update skill scripts for the new toolbox binary ([#144](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/144)) ([71f5b11](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/71f5b1174965cbd626f1f5d88ec07bb2c4d92655))


### Bug Fixes

* **skills:** Fix skill generation template ([mcp-toolbox#​2914](https://redirect.github.com/googleapis/mcp-toolbox/issues/2914)) ([a01a15e](https://redirect.github.com/googleapis/mcp-toolbox/commit/a01a15ed1aa9a83eda8362578fed2e3a3c8dde99)) ([d210a15](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/d210a15ca1a965da6a22ba43b62d3b657806777f))
* **skills:** Prevent empty strings overriding optional env vars in node scripts ([mcp-toolbox#​2963](https://redirect.github.com/googleapis/mcp-toolbox/issues/2963)) ([c52adeb](https://redirect.github.com/googleapis/mcp-toolbox/commit/c52adeba76fc13d0e6e415f6393def0648e478d6)) ([d210a15](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/d210a15ca1a965da6a22ba43b62d3b657806777f))

## [0.3.0](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.2.4...0.3.0) (2026-03-27)


### ⚠ BREAKING CHANGES

* **http:** sanitize non-2xx error output ([mcp-toolbox#​2654](https://redirect.github.com/googleapis/mcp-toolbox/issues/2654))
* add a new `enable-api` flag ([mcp-toolbox#​2846](https://redirect.github.com/googleapis/mcp-toolbox/issues/2846))
* remove deprecations and update tools-file flag ([mcp-toolbox#​2806](https://redirect.github.com/googleapis/mcp-toolbox/issues/2806))
* release upgraded docsite ([mcp-toolbox#​2831](https://redirect.github.com/googleapis/mcp-toolbox/issues/2831))

### Features

* **auth:** Add generic `authService` type for MCP ([mcp-toolbox#​2619](https://redirect.github.com/googleapis/mcp-toolbox/issues/2619)) ([f6678f8](https://redirect.github.com/googleapis/mcp-toolbox/commit/f6678f8e29aa3346f4f73ce33cec37b4753d6947)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* **auth:** Add Protected Resource Metadata endpoint ([mcp-toolbox#​2698](https://redirect.github.com/googleapis/mcp-toolbox/issues/2698)) ([b53dcf2](https://redirect.github.com/googleapis/mcp-toolbox/commit/b53dcf20694599f8b961c501a532bd122630b6f4)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* **auth:** Support manual PRM override ([mcp-toolbox#​2717](https://redirect.github.com/googleapis/mcp-toolbox/issues/2717)) ([283e4e3](https://redirect.github.com/googleapis/mcp-toolbox/commit/283e4e33172571e4b20fa6a3ea0cfc632a565e6a)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* **dataplex:** Add support for lookup context tool. ([mcp-toolbox#​2744](https://redirect.github.com/googleapis/mcp-toolbox/issues/2744)) ([facb69d](https://redirect.github.com/googleapis/mcp-toolbox/commit/facb69d01fe0c7ff9e2e1c40804dd00762e508a6)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* **http:** sanitize non-2xx error output ([mcp-toolbox#​2654](https://redirect.github.com/googleapis/mcp-toolbox/issues/2654)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* add a new `enable-api` flag ([mcp-toolbox#​2846](https://redirect.github.com/googleapis/mcp-toolbox/issues/2846)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* Add a new `enable-api` flag ([mcp-toolbox#​2846](https://redirect.github.com/googleapis/mcp-toolbox/issues/2846)) ([7a070da](https://redirect.github.com/googleapis/mcp-toolbox/commit/7a070dae4f1833671649ea605f36659675d402a9)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* release upgraded docsite ([mcp-toolbox#​2831](https://redirect.github.com/googleapis/mcp-toolbox/issues/2831)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* remove deprecations and update tools-file flag ([mcp-toolbox#​2806](https://redirect.github.com/googleapis/mcp-toolbox/issues/2806)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* Remove deprecations and update tools-file flag ([mcp-toolbox#​2806](https://redirect.github.com/googleapis/mcp-toolbox/issues/2806)) ([ab64c95](https://redirect.github.com/googleapis/mcp-toolbox/commit/ab64c9514a467d92a4547eda5a4ecdd08f86b0c9)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))


### Bug Fixes

* **ci:** Remove search index generation from preview deployment workflow ([mcp-toolbox#​2859](https://redirect.github.com/googleapis/mcp-toolbox/issues/2859)) ([f8891b8](https://redirect.github.com/googleapis/mcp-toolbox/commit/f8891b82fcaaef240e1031cd9f784749d91d4210)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* **docs:** Skip empty folders in pagination & reduce PR comment noise ([mcp-toolbox#​2853](https://redirect.github.com/googleapis/mcp-toolbox/issues/2853)) ([9ebd93a](https://redirect.github.com/googleapis/mcp-toolbox/commit/9ebd93a8ecb9bae673aa77a859803629fc7a4e1d)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* **http:** Sanitize non-2xx error output ([mcp-toolbox#​2654](https://redirect.github.com/googleapis/mcp-toolbox/issues/2654)) ([5bef954](https://redirect.github.com/googleapis/mcp-toolbox/commit/5bef954507c8e23b6c9b0eb2551265e4be32b452)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))
* **skills:** Fix integer parameter parsing through agent skills ([mcp-toolbox#​2847](https://redirect.github.com/googleapis/mcp-toolbox/issues/2847)) ([4564efe](https://redirect.github.com/googleapis/mcp-toolbox/commit/4564efe75436b4081d9f3d1f7c912bc64c13f850)) ([a2f8893](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a2f88937fdd7452a441f875c488fe64b37f006bf))

## [0.2.4](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.2.3...0.2.4) (2026-03-23)


### Features

* **cli:** Add migrate subcommand ([mcp-toolbox#​2679](https://redirect.github.com/googleapis/mcp-toolbox/issues/2679)) ([12171f7](https://redirect.github.com/googleapis/mcp-toolbox/commit/12171f7a02bcd34ce647db10abdb79bb2dac7ace)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))
* **cli:** Add serve subcommand ([mcp-toolbox#​2550](https://redirect.github.com/googleapis/mcp-toolbox/issues/2550)) ([1e2c7c7](https://redirect.github.com/googleapis/mcp-toolbox/commit/1e2c7c7804c67bebf5e2ee9b67c6feb6f05292fd)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))
* **skill:** One skill per toolset ([mcp-toolbox#​2733](https://redirect.github.com/googleapis/mcp-toolbox/issues/2733)) ([5b85c65](https://redirect.github.com/googleapis/mcp-toolbox/commit/5b85c65960dba9bfaf4cadca6d44532a153976e1)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))


### Bug Fixes

* **ci:** Implement conditional sharding logic in integration tests ([mcp-toolbox#​2763](https://redirect.github.com/googleapis/mcp-toolbox/issues/2763)) ([1528d7c](https://redirect.github.com/googleapis/mcp-toolbox/commit/1528d7c38dfaa30bdecbe59c79ba926fa6d18356)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))
* **cloudloggingadmin:** Increase log injesting time and add auth test ([mcp-toolbox#​2772](https://redirect.github.com/googleapis/mcp-toolbox/issues/2772)) ([50b4457](https://redirect.github.com/googleapis/mcp-toolbox/commit/50b4457095ec4ac881b3b12719da24d35141f65d)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))
* **oracle:** Normalize encoded proxy usernames in go-ora DSN ([mcp-toolbox#​2469](https://redirect.github.com/googleapis/mcp-toolbox/issues/2469)) ([b1333cd](https://redirect.github.com/googleapis/mcp-toolbox/commit/b1333cd27117655f8ab09f222721e14bea74b487)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))
* **postgres:** Update execute-sql tool to avoid multi-statements parameter ([mcp-toolbox#​2707](https://redirect.github.com/googleapis/mcp-toolbox/issues/2707)) ([58bc772](https://redirect.github.com/googleapis/mcp-toolbox/commit/58bc772f882f0d9e00f403e73fbec812dd8a03ac)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))
* **skills:** Improve flag validation and silence unit test output ([mcp-toolbox#​2759](https://redirect.github.com/googleapis/mcp-toolbox/issues/2759)) ([f3da6aa](https://redirect.github.com/googleapis/mcp-toolbox/commit/f3da6aa5e23b609a1ac9ecc098bccea02f2388ab)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))
* **test:** Address flaky healthcare integration test run ([mcp-toolbox#​2742](https://redirect.github.com/googleapis/mcp-toolbox/issues/2742)) ([9590821](https://redirect.github.com/googleapis/mcp-toolbox/commit/9590821bc7d86c5cbacd29b21d4f85b427a87db4)) ([f967cef](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f967cef23b7ca5b5a14c2bac3c18d8dff8827e30))

## [0.2.3](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.2.0...0.2.3) (2026-03-18)


### Features

* add support for skills ([#109](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/109)) ([02c4179](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/02c4179c873a95e2e2446c91a1a463ced07f783c))

## [0.2.0](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.11...0.2.0) (2026-03-17)


### ⚠ BREAKING CHANGES

* **source/cloudsql:** restructure prebuilt toolsets ([#​2635](https://redirect.github.com/googleapis/mcp-toolbox/issues/2635))

### Features

* **source/cloudsql:** restructure prebuilt toolsets ([#​2635](https://redirect.github.com/googleapis/mcp-toolbox/issues/2635)) ([8138de0](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/8138de0c8ca20039028a771fda66395e2fefb53c))


### Bug Fixes

* Improve list locks integration test for postgres ([mcp-toolbox#​2279](https://redirect.github.com/googleapis/mcp-toolbox/issues/2279)) ([d9ebe5d](https://redirect.github.com/googleapis/mcp-toolbox/commit/d9ebe5d4bf1b7ca04cae47386b36c38ca5b77b8a)) ([8138de0](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/8138de0c8ca20039028a771fda66395e2fefb53c))

## [0.1.11](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.10...0.1.11) (2026-03-11)


### Features

* **deps:** update dependency googleapis/mcp-toolbox to v0.28.0 ([#93](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/93)) ([f37bb91](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f37bb91adbcde2fd075e35e84c1fbb82e1affe8a))

## [0.1.10](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.9...0.1.10) (2026-02-24)


### Bug Fixes

* remove broken keychain support for password ([#104](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/104)) ([dacda20](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/dacda20efaa224af97c89d69e7efb4226f522861))

## [0.1.9](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.8...0.1.9) (2026-01-28)


### Features

* **prebuilt/cloud-sql:** Add create backup tool for Cloud SQL ([mcp-toolbox#​2141](https://redirect.github.com/googleapis/mcp-toolbox/issues/2141)) ([8e0fb03](https://redirect.github.com/googleapis/mcp-toolbox/commit/8e0fb0348315a80f63cb47b3c7204869482448f4)) ([a547399](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a5473998e638a0caaf9afecb8edcfc391d192a41))
* **prebuilt/cloud-sql:** Add restore backup tool for Cloud SQL ([mcp-toolbox#​2171](https://redirect.github.com/googleapis/mcp-toolbox/issues/2171)) ([00c3e6d](https://redirect.github.com/googleapis/mcp-toolbox/commit/00c3e6d8cba54e2ab6cb271c7e6b378895df53e1)) ([a547399](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/a5473998e638a0caaf9afecb8edcfc391d192a41))
* add Configuration settings ([#85](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/85)) ([4ab7fbc](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/4ab7fbca2e25a437d3feb1edeff1c49fd4c15ed2))

## [0.1.8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.7...0.1.8) (2026-01-14)


### Features

* **deps:** update dependency googleapis/mcp-toolbox to v0.25.0 ([#80](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/80)) ([ac9886c](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/ac9886c7ac60b9e6ceeb3bf7b6af261e9f52c8e0))

## [0.1.7](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.6...0.1.7) (2025-12-08)


### Features

* **prebuilt/cloud-sql:** Add clone instance tool for cloud sql ([mcp-toolbox#​1845](https://redirect.github.com/googleapis/mcp-toolbox/issues/1845)) ([5e43630](https://redirect.github.com/googleapis/mcp-toolbox/commit/5e43630907aa2d7bc6818142483a33272eab060b)) ([3d737a6](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/3d737a613970cb8b7a4b584f6b19c7064463c90b))
* **tools/cloudsqlpg:** Add CloudSQL PostgreSQL pre-check tool ([mcp-toolbox#​1722](https://redirect.github.com/googleapis/mcp-toolbox/issues/1722)) ([8752e05](https://redirect.github.com/googleapis/mcp-toolbox/commit/8752e05ab6e98812d95673a6f1ff67e9a6ae48d2)) ([3d737a6](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/3d737a613970cb8b7a4b584f6b19c7064463c90b))
* **tools/postgres-list-publication-tables:** Add new postgres-list-publication-tables tool ([mcp-toolbox#​1919](https://redirect.github.com/googleapis/mcp-toolbox/issues/1919)) ([f4b1f0a](https://redirect.github.com/googleapis/mcp-toolbox/commit/f4b1f0a68000ca2fc0325f55a1905705417c38a2)) ([3d737a6](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/3d737a613970cb8b7a4b584f6b19c7064463c90b))
* **tools/postgres-list-tablespaces:** Add new postgres-list-tablespaces tool ([mcp-toolbox#​1934](https://redirect.github.com/googleapis/mcp-toolbox/issues/1934)) ([5ad7c61](https://redirect.github.com/googleapis/mcp-toolbox/commit/5ad7c6127b3e47504fc4afda0b7f3de1dff78b8b)) ([3d737a6](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/3d737a613970cb8b7a4b584f6b19c7064463c90b))
* **tools/postgres:** Add list-query-stats and get-column-cardinality functions ([mcp-toolbox#​1976](https://redirect.github.com/googleapis/mcp-toolbox/issues/1976)) ([9f76026](https://redirect.github.com/googleapis/mcp-toolbox/commit/9f760269253a8cc92a357e995c6993ccc4a0fb7b)) ([3d737a6](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/3d737a613970cb8b7a4b584f6b19c7064463c90b))

## [0.1.6](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.5...0.1.6) (2025-11-26)


### Features

* **tools/postgres:** Add `long_running_transactions`, `list_locks` and `replication_stats` tools ([mcp-toolbox#​1751](https://redirect.github.com/googleapis/mcp-toolbox/issues/1751)) ([5abad5d](https://redirect.github.com/googleapis/mcp-toolbox/commit/5abad5d56c6cc5ba86adc5253b948bf8230fa830)) ([f3d34c7](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f3d34c7ae243b4b2f3284dfecae1b94b738ae414))


### Bug Fixes

* **tools:** Check for query execution error for pgxpool.Pool ([mcp-toolbox#​1969](https://redirect.github.com/googleapis/mcp-toolbox/issues/1969)) ([2bff138](https://redirect.github.com/googleapis/mcp-toolbox/commit/2bff1384a3570ef46bc03ebebc507923af261987)) ([f3d34c7](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f3d34c7ae243b4b2f3284dfecae1b94b738ae414))

## [0.1.5](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.4...0.1.5) (2025-11-18)


### Features

* **source/alloydb, source/cloud-sql-postgres,source/cloud-sql-mysql,source/cloud-sql-mssql:** Use project from env for alloydb and cloud sql control plane tools ([mcp-toolbox#​1588](https://redirect.github.com/googleapis/mcp-toolbox/issues/1588)) ([12bdd95](https://redirect.github.com/googleapis/mcp-toolbox/commit/12bdd954597e49d3ec6b247cc104584c5a4d1943)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))
* **tools/postgres:** Add `list_triggers`, `database_overview` tools for postgres ([mcp-toolbox#​1912](https://redirect.github.com/googleapis/mcp-toolbox/issues/1912)) ([a4c9287](https://redirect.github.com/googleapis/mcp-toolbox/commit/a4c9287aecf848faa98d973a9ce5b13fa309a58e)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))
* **tools/postgres:** Add list\_indexes, list\_sequences tools for postgres ([mcp-toolbox#​1765](https://redirect.github.com/googleapis/mcp-toolbox/issues/1765)) ([897c63d](https://redirect.github.com/googleapis/mcp-toolbox/commit/897c63dcea43226262d2062088c59f2d1068fca7)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))
* Added prompt support for toolbox ([mcp-toolbox#​1798](https://redirect.github.com/googleapis/mcp-toolbox/issues/1798)) ([cd56ea4](https://redirect.github.com/googleapis/mcp-toolbox/commit/cd56ea44fbdd149fcb92324e70ee36ac747635db)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))

## [0.1.4](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.3...0.1.4) (2025-11-07)


### Features

* **tools/postgres-list-schemas:** Add new postgres-list-schemas tool ([mcp-toolbox#​1741](https://redirect.github.com/googleapis/mcp-toolbox/issues/1741)) ([1a19cac](https://redirect.github.com/googleapis/mcp-toolbox/commit/1a19cac7cd89ed70291eb55e190370fe7b2c1aba)) ([995cb23](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/995cb23cabb01ac77814f9d12221ee6a262ea461))
* **tools/postgres-list-views:** Add new postgres-list-views tool ([mcp-toolbox#​1709](https://redirect.github.com/googleapis/mcp-toolbox/issues/1709)) ([e8c7fe0](https://redirect.github.com/googleapis/mcp-toolbox/commit/e8c7fe0994fedcb9be78d461fab3c98cc6bd86b2)) ([995cb23](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/995cb23cabb01ac77814f9d12221ee6a262ea461))
* Adding google_ml_integration instructions ([#63](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/63)) ([56185e7](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/56185e732ee4b6e34aa47d59def6cede48379486))


### Bug Fixes

* **tools/postgres-execute-sql:** Do not ignore SQL failure ([mcp-toolbox#​1829](https://redirect.github.com/googleapis/mcp-toolbox/issues/1829)) ([8984287](https://redirect.github.com/googleapis/mcp-toolbox/commit/898428759c2a1a384bea8939605cf0914d129bec)) ([995cb23](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/995cb23cabb01ac77814f9d12221ee6a262ea461))

## [0.1.3](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.2...0.1.3) (2025-10-17)


### Bug Fixes

* update context for install instructions ([#46](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/46)) ([47feef9](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/47feef9cc6c9078c1febcac44940a69effb69ea8))

## [0.1.2](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.1...0.1.2) (2025-10-13)


### Features

* **deps:** update dependency googleapis/mcp-toolbox to v0.17.0 ([#40](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/40)) ([0310c85](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/0310c85517e6b4e8999fe6a9dc276f5e1c57f47b))

## [0.1.1](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.0...0.1.1) (2025-09-30)


### Features

* additional instructions for the context file ([#30](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/30)) ([9c87df1](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/9c87df1f1959686bf1efa863f463fa4e39882fe2))
* standardize mcp server names ([#27](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/27)) ([eeeaf81](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/eeeaf813b802491e183a21fbfa23b2f684bda032))
* update context file to recommend observability extension ([#17](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/17)) ([f4f7069](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f4f7069a41dabfb995bf1728ed4e0a710cc0425e))
* update context file to use full table name ([#31](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/31)) ([533a2f3](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/533a2f388fbf5b21484da904e46247d10cc43746))


## 0.1.0 (2025-09-20)


### Features

* create the Cloud SQL for PostgreSQL Extension
