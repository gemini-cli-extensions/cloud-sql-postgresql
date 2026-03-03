---
name: cloudsql-postgres
description: skill for running tool operations in CloudSql postgres
---

## Usage

All scripts can be executed using Node.js. Replace `<param_name>` and `<param_value>` with actual values.

**Bash:**
`node scripts/<script_name>.js '{"<param_name>": "<param_value>"}'`

**PowerShell:**
`node scripts/<script_name>.js '{\"<param_name>\": \"<param_value>\"}'`

## Scripts


### database_overview

Fetches the current state of the PostgreSQL server, returning the version, whether it's a replica, uptime duration, maximum connection limit, number of current connections, number of active connections, and the percentage of connections in use.



---

### execute_sql

Use this tool to execute sql.

#### Parameters

```json
{
  "properties": {
    "sql": {
      "description": "The sql to execute.",
      "type": "string"
    }
  },
  "required": [
    "sql"
  ],
  "type": "object"
}
```

---

### get_column_cardinality

Estimates the number of unique values (cardinality) quickly for one or all columns in a specific PostgreSQL table by using the database's internal statistics, returning the results in descending order of estimated cardinality. Please run ANALYZE on the table before using this tool to get accurate results. The tool returns the column_name and the estimated_cardinality. If the column_name is not provided, the tool returns all columns along with their estimated cardinality.

#### Parameters

```json
{
  "properties": {
    "column_name": {
      "description": "Optional: The column name for which the cardinality is to be found. If not provided, cardinality for all columns will be returned.",
      "type": "string"
    },
    "schema_name": {
      "default": "public",
      "description": "Optional: The schema name in which the table is present.",
      "type": "string"
    },
    "table_name": {
      "description": "Required: The table name in which the column is present.",
      "type": "string"
    }
  },
  "required": [
    "table_name"
  ],
  "type": "object"
}
```

---

### get_query_plan

Generate a PostgreSQL EXPLAIN plan in JSON format for a single SQL statement—without executing it. This returns the optimizer's estimated plan, costs, and rows (no ANALYZE, no extra options). Use in production safely for plan inspection, regression checks, and query tuning workflows.

#### Parameters

```json
{
  "properties": {
    "query": {
      "description": "The SQL statement for which you want to generate plan (omit the EXPLAIN keyword).",
      "type": "string"
    }
  },
  "required": [
    "query"
  ],
  "type": "object"
}
```

---

### list_active_queries

List the top N (default 50) currently running queries (state='active') from pg_stat_activity, ordered by longest-running first. Returns pid, user, database, application_name, client_addr, state, wait_event_type/wait_event, backend/xact/query start times, computed query_duration, and the SQL text.

#### Parameters

```json
{
  "properties": {
    "exclude_application_names": {
      "default": "",
      "description": "Optional: A comma-separated list of application names to exclude from the query results. This is useful for filtering out queries from specific applications (e.g., 'psql', 'pgAdmin', 'DBeaver'). The match is case-sensitive. Whitespace around commas and names is automatically handled. If this parameter is omitted, no applications are excluded.",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return.",
      "type": "integer"
    },
    "min_duration": {
      "default": "1 minute",
      "description": "Optional: Only show queries running at least this long (e.g., '1 minute', '1 second', '2 seconds').",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_autovacuum_configurations

List PostgreSQL autovacuum-related configurations (name and current setting) from pg_settings.



---

### list_available_extensions

Discover all PostgreSQL extensions available for installation on this server, returning name, default_version, and description.



---

### list_database_stats



#### Parameters

```json
{
  "properties": {
    "database_name": {
      "default": "",
      "description": "Optional: A specific database name pattern to search for.",
      "type": "string"
    },
    "database_owner": {
      "default": "",
      "description": "Optional: A specific database owner name pattern to search for.",
      "type": "string"
    },
    "default_tablespace": {
      "default": "",
      "description": "Optional: A specific default tablespace name pattern to search for.",
      "type": "string"
    },
    "include_templates": {
      "default": false,
      "description": "Optional: Whether to include template databases in the results.",
      "type": "boolean"
    },
    "limit": {
      "default": 10,
      "description": "Optional: The maximum number of rows to return.",
      "type": "integer"
    },
    "order_by": {
      "default": "",
      "description": "Optional: The field to order the results by. Valid values are 'size' and 'commit'.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_indexes

Lists available user indexes in the database, excluding system schemas (pg_catalog, information_schema). For each index, the following properties are returned: schema name, table name, index name, index type (access method), a boolean indicating if it's a unique index, a boolean indicating if it's for a primary key, the index definition, index size in bytes, the number of index scans, the number of index tuples read, the number of table tuples fetched via index scans, and a boolean indicating if the index has been used at least once.

#### Parameters

```json
{
  "properties": {
    "index_name": {
      "default": "",
      "description": "Optional: a text to filter results by index name. The input is used within a LIKE clause.",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return. Default is 50",
      "type": "integer"
    },
    "only_unused": {
      "default": false,
      "description": "Optional: If true, only returns indexes that have never been used.",
      "type": "boolean"
    },
    "schema_name": {
      "default": "",
      "description": "Optional: a text to filter results by schema name. The input is used within a LIKE clause.",
      "type": "string"
    },
    "table_name": {
      "default": "",
      "description": "Optional: a text to filter results by table name. The input is used within a LIKE clause.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_installed_extensions

List all installed PostgreSQL extensions with their name, version, schema, owner, and description.



---

### list_invalid_indexes

Lists all invalid PostgreSQL indexes which are taking up disk space but are unusable by the query planner. Typically created by failed CREATE INDEX CONCURRENTLY operations.



---

### list_locks

Identifies all locks held by active processes showing the process ID, user, query text, and an aggregated list of all transactions and specific locks (relation, mode, grant status) associated with each process.



---

### list_memory_configurations

List PostgreSQL memory-related configurations (name and current setting) from pg_settings.



---

### list_pg_settings



#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return.",
      "type": "integer"
    },
    "setting_name": {
      "default": "",
      "description": "Optional: A specific configuration parameter name pattern to search for.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_publication_tables



#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return.",
      "type": "integer"
    },
    "publication_names": {
      "default": "",
      "description": "Optional: Filters by a comma-separated list of publication names.",
      "type": "string"
    },
    "schema_names": {
      "default": "",
      "description": "Optional: Filters by a comma-separated list of schema names.",
      "type": "string"
    },
    "table_names": {
      "default": "",
      "description": "Optional: Filters by a comma-separated list of table names.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_query_stats

Lists performance statistics for executed queries ordered by total time, filtering by database name pattern if provided. This tool requires the pg_stat_statements extension to be installed. The tool returns the database name, query text, execution count, timing metrics (total, min, max, mean), rows affected, and buffer cache I/O statistics (hits and reads).

#### Parameters

```json
{
  "properties": {
    "database_name": {
      "default": "",
      "description": "Optional: The database name to list query stats for.",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of results to return. Defaults to 50.",
      "type": "integer"
    }
  },
  "type": "object"
}
```

---

### list_replication_slots

List key details for all PostgreSQL replication slots (e.g., type, database, active status) and calculates the size of the outstanding WAL that is being prevented from removal by the slot.



---

### list_roles

Lists all the user-created roles in the instance . It returns the role name, Object ID, the maximum number of concurrent connections the role can make, along with boolean indicators for: superuser status, privilege inheritance from member roles, ability to create roles, ability to create databases, ability to log in, replication privilege, and the ability to bypass row-level security, the password expiration timestamp, a list of direct members belonging to this role, and a list of other roles/groups that this role is a member of.

#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return. Default is 10",
      "type": "integer"
    },
    "role_name": {
      "default": "",
      "description": "Optional: a text to filter results by role name. The input is used within a LIKE clause.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_schemas

Lists all schemas in the database ordered by schema name and excluding system and temporary schemas. It returns the schema name, schema owner, grants, number of functions, number of tables and number of views within each schema.

#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 10,
      "description": "Optional: The maximum number of schemas to return.",
      "type": "integer"
    },
    "owner": {
      "default": "",
      "description": "Optional: A specific schema owner name pattern to search for.",
      "type": "string"
    },
    "schema_name": {
      "default": "",
      "description": "Optional: A specific schema name pattern to search for.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_sequences

Lists sequences in the database. Returns sequence name, schema name, sequence owner, data type of the sequence, starting value, minimum value, maximum value of the sequence, the value by which the sequence is incremented, and the last value generated by the sequence in the current session

#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return. Default is 50",
      "type": "integer"
    },
    "schema_name": {
      "default": "",
      "description": "Optional: A specific schema name pattern to search for.",
      "type": "string"
    },
    "sequence_name": {
      "default": "",
      "description": "Optional: A specific sequence name pattern to search for.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_stored_procedure

Retrieves stored procedure metadata returning schema name, procedure name, procedure owner, language, definition, and description, filtered by optional role name (procedure owner), schema name, and limit (default 20).

#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 20,
      "description": "Optional: The maximum number of stored procedures to return. Defaults to 20.",
      "type": "integer"
    },
    "role_name": {
      "description": "Optional: The owner name to filter the stored procedures by. Defaults to NULL.",
      "type": "string"
    },
    "schema_name": {
      "description": "Optional: The schema name to filter the stored procedures by. Defaults to NULL.",
      "type": "string"
    }
  },
  "type": "object"
}
```

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

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of results to return",
      "type": "integer"
    },
    "owner": {
      "description": "Optional: A specific owner to filter by",
      "type": "string"
    },
    "schema_name": {
      "default": "public",
      "description": "Optional: A specific schema name to filter by",
      "type": "string"
    },
    "sort_by": {
      "description": "Optional: The column to sort by",
      "type": "string"
    },
    "table_name": {
      "description": "Optional: A specific table name to filter by",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_tables

Lists detailed schema information (object type, columns, constraints, indexes, triggers, owner, comment) as JSON for user-created tables (ordinary or partitioned). Filters by a comma-separated list of names. If names are omitted, lists all tables in user schemas.

#### Parameters

```json
{
  "properties": {
    "output_format": {
      "default": "detailed",
      "description": "Optional: Use 'simple' for names only or 'detailed' for full info.",
      "type": "string"
    },
    "table_names": {
      "default": "",
      "description": "Optional: A comma-separated list of table names. If empty, details for all tables will be listed.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_tablespaces



#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return.",
      "type": "integer"
    },
    "tablespace_name": {
      "default": "",
      "description": "Optional: a text to filter results by tablespace name. The input is used within a LIKE clause.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_top_bloated_tables

List the top tables by dead-tuple (approximate bloat signal), returning schema, table, live/dead tuples, percentage, and last vacuum/analyze times.


#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "The maximum number of results to return.",
      "type": "integer"
    }
  },
  "type": "object"
}
```

---

### list_triggers

Lists all non-internal triggers in a database. Returns trigger name, schema name, table name, whether its enabled or disabled, timing (e.g BEFORE/AFTER of the event), the  events that cause the trigger to fire such as INSERT, UPDATE, or DELETE, whether the trigger activates per ROW or per STATEMENT, the handler function executed by the trigger and full definition.

#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return.",
      "type": "integer"
    },
    "schema_name": {
      "default": "",
      "description": "Optional: A specific schema name pattern to search for.",
      "type": "string"
    },
    "table_name": {
      "default": "",
      "description": "Optional: A specific table name pattern to search for.",
      "type": "string"
    },
    "trigger_name": {
      "default": "",
      "description": "Optional: A specific trigger name pattern to search for.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_views

Lists views in the database from pg_views with a default limit of 50 rows. Returns schemaname, viewname, ownername and the definition.

#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "description": "Optional: The maximum number of rows to return.",
      "type": "integer"
    },
    "schema_name": {
      "default": "",
      "description": "Optional: A specific schema name to search for.",
      "type": "string"
    },
    "view_name": {
      "default": "",
      "description": "Optional: A specific view name to search for.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### long_running_transactions

Identifies and lists database transactions that exceed a specified time limit. For each of the long running transactions, the output contains the process id, database name, user name, application name, client address, state, connection age, transaction age, query age, last activity age, wait event type, wait event, and query string.

#### Parameters

```json
{
  "properties": {
    "limit": {
      "default": 20,
      "description": "Optional: The maximum number of long-running transactions to return. Defaults to 20.",
      "type": "integer"
    },
    "min_duration": {
      "default": "5 minutes",
      "description": "Optional: Only show transactions running at least this long (e.g., '1 minute', '15 minutes', '30 seconds').",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### replication_stats

Lists each replica's process ID, user name, application name, backend_xmin (standby's xmin horizon reported by hot_standby_feedback), client IP address, connection state, and sync_state, along with lag sizes in bytes for sent_lag (primary to sent), write_lag (sent to written), flush_lag (written to flushed), replay_lag (flushed to replayed), and the overall total_lag (primary to replayed).



---

