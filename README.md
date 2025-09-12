# Gemini CLI Extension - Cloud SQL for PostgreSQL

This Gemini CLI extension provides a set of tools to interact with [Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres) instances. It allows you to manage your databases, execute queries, and explore schemas directly from the [Gemini CLI](https://google-gemini.github.io/gemini-cli/), using natural language prompts.

## Features

*   **Integrated with Gemini CLI:** As a Google-developed extension, it integrates seamlessly into the Gemini CLI environment, making security an accessible part of your workflow.
*   **Connect to Cloud SQL for PostgreSQL:** Securely connect to your Cloud SQL for PostgreSQL instances.
*   **Explore Database Schema:** List databases, tables, views, and schemas.
*   **Query your Database:** Execute SQL queries against your database.

## Supported Tools

🟢 list-tables: Use this tool to list tables and descriptions.
🟢 execute-sql: Use this tool to execute any SQL statement.
🚧 cloudsql-wait-for-operation: Polls the operations API until an operation is complete.
🚧 cloudsql-user-create: Use this tool to create a new user for a Cloud SQL instance.
🚧 cloudsql-database-list: Use this tool to list databases within a Cloud SQL instance.
🚧 cloudsql-database-create: Use this tool to create a new database within a Cloud SQL instance.
🚧 cloudsql-instance-list: Use this tool to list Cloud SQL instances in a given project and location.
🚧 cloudsql-instance-get: Use this tool to get details about a specific Cloud SQL instance.
🚧 cloudsql-instance-create: Use this tool to create (insert) a new Cloud SQL instance.
🔜 csql-postgresql-system-metrics: Use this tool to retrieve system metrics for a Cloud SQL for PostgreSQL instance.
🔜 csql-postgresql-query-metrics: Use this tool to retrieve query-related metrics for a Cloud SQL for PostgreSQL instance.

## Prerequisites

Before you begin, ensure you have the following:

*   [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed.
*   A Google Cloud project with the **Cloud SQL Admin API** enabled.
*   IAM Permissions

## Installation

To install the extension, use the `gemini extensions install` command:

```bash
gemini extensions install github.com/gemini-cli-extensions/cloud-sql-postgresql.git
```

## Configuration

*   `CLOUD_SQL_POSTGRES_PROJECT`: The GCP project ID.
*   `CLOUD_SQL_POSTGRES_REGION`: The region of your Cloud SQL instance.
*   `CLOUD_SQL_POSTGRES_INSTANCE`: The ID of your Cloud SQL instance.
*   `CLOUD_SQL_POSTGRES_DATABASE`: The name of the database to connect to.
*   `CLOUD_SQL_POSTGRES_USER`: (Optional) The database username.
*   `CLOUD_SQL_POSTGRES_PASSWORD`: (Optional) The password for the database user.
*   `CLOUD_SQL_POSTGRES_IP_TYPE`: (Optional) The IP Type.


## Usage

* Provision Infrastructure
* Explore Schemas and Data
* Generate code


## Security

This extension executes commands against your Cloud SQL for PostgreSQL database. Always review the generated SQL queries before execution, especially for write operations.

## Disclaimer

This is not an officially supported Google product. This extension is under active development, and breaking changes may be introduced.