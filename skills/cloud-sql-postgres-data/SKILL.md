---
name: cloud-sql-postgres-data
description: Use these skills when you need to explore the database structure, discover schema objects like views or stored procedures, and execute custom SQL queries to interact with your data.
---

## Usage

All scripts can be executed using Node.js. Replace `<param_name>` and `<param_value>` with actual values.

**Bash:**
`node <skill_dir>/scripts/<script_name>.js '{"<param_name>": "<param_value>"}'`

**PowerShell:**
`node <skill_dir>/scripts/<script_name>.js '{\"<param_name>\": \"<param_value>\"}'`

Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence.

## Scripts

### execute_sql

Use this skill to execute sql.

#### Parameters

| Name | Type   | Description         | Required | Default |
| :--- | :----- | :------------------ | :------- | :------ |
| sql  | string | The sql to execute. | Yes      |         |

---