---
name: cloud-sql-postgres-health
description: Use these skills when you need to audit database health, identify storage bloat, find invalid indexes, analyze table statistics, and manage maintenance configurations like autovacuum.
---

## Usage

All scripts can be executed using Node.js. Replace `<param_name>` and `<param_value>` with actual values.

**Bash:**
`node <skill_dir>/scripts/<script_name>.js '{"<param_name>": "<param_value>"}'`

**PowerShell:**
`node <skill_dir>/scripts/<script_name>.js '{\"<param_name>\": \"<param_value>\"}'`

Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence.


## Scripts


### database_overview

Fetches the current state of the PostgreSQL server, returning the version, whether it's a replica, uptime duration, maximum connection limit, number of current connections, number of active connections, and the percentage of connections in use.



---

### get_column_cardinality

Estimates the number of unique values (cardinality) quickly for one or all columns in a specific PostgreSQL table by using the database's internal statistics, returning the results in descending order of estimated cardinality. Please run ANALYZE on the table before using this tool to get accurate results. The tool returns the column_name and the estimated_cardinality. If the column_name is not provided, the tool returns all columns along with their estimated cardinality.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| schema_name | string | Optional: The schema name in which the table is present. | No |  |
| table_name | string | Required: The table name in which the column is present. | Yes |  |
| column_name | string | Optional: The column name for which the cardinality is to be found. If not provided, cardinality for all columns will be returned. | No |  |


---

### list_autovacuum_configurations

List PostgreSQL autovacuum-related configurations (name and current setting) from pg_settings.



---

### list_invalid_indexes

Lists all invalid PostgreSQL indexes which are taking up disk space but are unusable by the query planner. Typically created by failed CREATE INDEX CONCURRENTLY operations.



---

### list_pg_settings

Lists configuration parameters for the postgres server ordered lexicographically, with a default limit of 50 rows. It returns the parameter name, its current setting, unit of measurement, a short description, the source of the current setting (e.g., default, configuration file, session), and whether a restart is required when the parameter value is changed.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| setting_name | string | Optional: A specific configuration parameter name pattern to search for. | No |  |
| limit | integer | Optional: The maximum number of rows to return. | No | `50` |


---

### list_table_stats

Lists the user table statistics in the database ordered by number of
        sequential scans with a default limit of 50 rows. Returns the following
        columns: schema name, table name, table size in bytes, number of
        sequential scans, number of index scans, idx_scan_ratio_percent (showing
        the percentage of total scans that utilized an index, where a low ratio
        indicates missing or ineffective indexes), number of live rows, number
        of dead rows, dead_row_ratio_percent (indicating potential table bloat),
        total number of rows inserted, updated, and deleted, the timestamps
        for the last_vacuum, last_autovacuum, and last_autoanalyze operations.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| schema_name | string | Optional: A specific schema name to filter by | No |  |
| table_name | string | Optional: A specific table name to filter by | No |  |
| owner | string | Optional: A specific owner to filter by | No |  |
| sort_by | string | Optional: The column to sort by | No |  |
| limit | integer | Optional: The maximum number of results to return | No | `50` |


---

### list_tablespaces

Lists all tablespaces in the database. Returns the tablespace name, owner name, size in bytes(if the current user has CREATE privileges on the tablespace, otherwise NULL), internal object ID, the access control list regarding permissions, and any specific tablespace options.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| tablespace_name | string | Optional: a text to filter results by tablespace name. The input is used within a LIKE clause. | No |  |
| limit | integer | Optional: The maximum number of rows to return. | No | `50` |


---

### list_top_bloated_tables

List the top tables by dead-tuple (approximate bloat signal), returning schema, table, live/dead tuples, percentage, and last vacuum/analyze times.


#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| limit | integer | The maximum number of results to return. | No | `50` |


---

