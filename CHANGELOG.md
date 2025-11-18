# Changelog

## [0.1.5](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.4...0.1.5) (2025-11-18)


### Features

* **source/alloydb, source/cloud-sql-postgres,source/cloud-sql-mysql,source/cloud-sql-mssql:** Use project from env for alloydb and cloud sql control plane tools ([genai-toolbox#​1588](https://redirect.github.com/googleapis/genai-toolbox/issues/1588)) ([12bdd95](https://redirect.github.com/googleapis/genai-toolbox/commit/12bdd954597e49d3ec6b247cc104584c5a4d1943)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))
* **tools/postgres:** Add `list_triggers`, `database_overview` tools for postgres ([genai-toolbox#​1912](https://redirect.github.com/googleapis/genai-toolbox/issues/1912)) ([a4c9287](https://redirect.github.com/googleapis/genai-toolbox/commit/a4c9287aecf848faa98d973a9ce5b13fa309a58e)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))
* **tools/postgres:** Add list\_indexes, list\_sequences tools for postgres ([genai-toolbox#​1765](https://redirect.github.com/googleapis/genai-toolbox/issues/1765)) ([897c63d](https://redirect.github.com/googleapis/genai-toolbox/commit/897c63dcea43226262d2062088c59f2d1068fca7)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))
* Added prompt support for toolbox ([genai-toolbox#​1798](https://redirect.github.com/googleapis/genai-toolbox/issues/1798)) ([cd56ea4](https://redirect.github.com/googleapis/genai-toolbox/commit/cd56ea44fbdd149fcb92324e70ee36ac747635db)) ([acdefd8](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/acdefd83bc467d29273e7617ff61eb15647dcdc1))

## [0.1.4](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.3...0.1.4) (2025-11-07)


### Features

* **tools/postgres-list-schemas:** Add new postgres-list-schemas tool ([genai-toolbox#​1741](https://redirect.github.com/googleapis/genai-toolbox/issues/1741)) ([1a19cac](https://redirect.github.com/googleapis/genai-toolbox/commit/1a19cac7cd89ed70291eb55e190370fe7b2c1aba)) ([995cb23](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/995cb23cabb01ac77814f9d12221ee6a262ea461))
* **tools/postgres-list-views:** Add new postgres-list-views tool ([genai-toolbox#​1709](https://redirect.github.com/googleapis/genai-toolbox/issues/1709)) ([e8c7fe0](https://redirect.github.com/googleapis/genai-toolbox/commit/e8c7fe0994fedcb9be78d461fab3c98cc6bd86b2)) ([995cb23](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/995cb23cabb01ac77814f9d12221ee6a262ea461))
* Adding google_ml_integration instructions ([#63](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/63)) ([56185e7](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/56185e732ee4b6e34aa47d59def6cede48379486))


### Bug Fixes

* **tools/postgres-execute-sql:** Do not ignore SQL failure ([genai-toolbox#​1829](https://redirect.github.com/googleapis/genai-toolbox/issues/1829)) ([8984287](https://redirect.github.com/googleapis/genai-toolbox/commit/898428759c2a1a384bea8939605cf0914d129bec)) ([995cb23](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/995cb23cabb01ac77814f9d12221ee6a262ea461))

## [0.1.3](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.2...0.1.3) (2025-10-17)


### Bug Fixes

* update context for install instructions ([#46](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/46)) ([47feef9](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/47feef9cc6c9078c1febcac44940a69effb69ea8))

## [0.1.2](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.1...0.1.2) (2025-10-13)


### Features

* **deps:** update dependency googleapis/genai-toolbox to v0.17.0 ([#40](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/40)) ([0310c85](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/0310c85517e6b4e8999fe6a9dc276f5e1c57f47b))

## [0.1.1](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/compare/0.1.0...0.1.1) (2025-09-30)


### Features

* additional instructions for the context file ([#30](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/30)) ([9c87df1](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/9c87df1f1959686bf1efa863f463fa4e39882fe2))
* standardize mcp server names ([#27](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/27)) ([eeeaf81](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/eeeaf813b802491e183a21fbfa23b2f684bda032))
* update context file to recommend observability extension ([#17](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/17)) ([f4f7069](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/f4f7069a41dabfb995bf1728ed4e0a710cc0425e))
* update context file to use full table name ([#31](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/issues/31)) ([533a2f3](https://github.com/gemini-cli-extensions/cloud-sql-postgresql/commit/533a2f388fbf5b21484da904e46247d10cc43746))


## 0.1.0 (2025-09-20)


### Features

* create the Cloud SQL for PostgreSQL Extension
