# Gemini CLI Extension - Cloud SQL for PostgreSQL

This Gemini CLI extension provides a set of tools to interact with [Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres) instances. It allows you to manage your databases, execute queries, and explore schemas directly from the [Gemini CLI](https://google-gemini.github.io/gemini-cli/), using natural language prompts.

## Why Use the Cloud SQL for PostgreSQL Extension?

* **Natural Language Management:** Stop wrestling with complex commands. Explore schemas and query data by describing what you want in plain English.
* **Seamless Workflow:** As a Google-developed extension, it integrates seamlessly into the Gemini CLI environment. No need to constantly switch contexts for common database tasks.
*   **Full Lifecycle Control:** Manage the entire lifecycle of your database, from creating instances to exploring schemas and running queries.
* **Code Generation:** Accelerate development by asking Gemini to generate data classes and other code snippets based on your table schemas.

## Prerequisites

Before you begin, ensure you have the following:

* [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed.
* A Google Cloud project with the **Cloud SQL Admin API** enabled.
* IAM Permissions:
  * Cloud SQL Client (`roles/cloudsql.client`)
  * Cloud SQL Admin (`roles/cloudsql.admin`)

## Installation

To install the extension, use the command:

```bash
gemini extensions install github.com/gemini-cli-extensions/cloud-sql-postgresql
```

## Configuration

Set the following environment variables before starting the Gemini CLI:

* `CLOUD_SQL_POSTGRES_PROJECT`: The GCP project ID.
* `CLOUD_SQL_POSTGRES_REGION`: The region of your Cloud SQL instance.
* `CLOUD_SQL_POSTGRES_INSTANCE`: The ID of your Cloud SQL instance.
* `CLOUD_SQL_POSTGRES_DATABASE`: The name of the database to connect to.
* `CLOUD_SQL_POSTGRES_USER`: (Optional) The database username.
* `CLOUD_SQL_POSTGRES_PASSWORD`: (Optional) The password for the database user.
* `CLOUD_SQL_POSTGRES_IP_TYPE`: (Optional) The IP Type.

> [!NOTE]
> When using private IPs with Cloud SQL for PostgreSQL, you must use a Virtual Private Cloud (VPC) network.
## Usage Examples

Interact with Cloud SQL for PostgreSQL using natural language right from your IDE:

* **Explore Schemas and Data:**
  * "Show me all tables in the 'orders' database."
  * "What are the columns in the 'products' table?"
  * "How many orders were placed in the last 30 days, and what were the top 5 most purchased items?"
* **Generate Code:**
  * "Generate a Python dataclass to represent the 'customers' table."

## Supported Tools

*   **Data:**
    * `list-tables`: Use this tool to list tables and descriptions.
    * `execute-sql`: Use this tool to execute any SQL statement.

*   **Admin:**
    * `wait_for_operation`: Polls the operations API until an operation is complete.
    * `user_create`: Use this tool to create a new user for a Cloud SQL instance.
    * `database_list`: Use this tool to list databases within a Cloud SQL instance.
    * `database_create`: Use this tool to create a new database within a Cloud SQL instance.
    * `instance_list`: Use this tool to list Cloud SQL instances in a given project and location.
    * `instance_get`: Use this tool to get details about a specific Cloud SQL instance.
    * `instance_create`: Use this tool to create (insert) a new Cloud SQL instance.
    * `system_metrics`: Use this tool to retrieve system metrics for a Cloud SQL for PostgreSQL instance.
    * `query_metrics`: Use this tool to retrieve query-related metrics for a Cloud SQL for PostgreSQL instance.```

## Additional Extensions

Find additional extensions to support your entire software development lifecycle at [github.com/gemini-cli-extensions](https://github.com/gemini-cli-extensions), including a generic [PostgreSQL extension](https://github.com/gemini-cli-extensions/postgres).

## Troubleshooting

* "cannot execute binary file": Ensure the correct binary for your OS/Architecture has been downloaded. See [Installing the server](https://googleapis.github.io/genai-toolbox/getting-started/introduction/#installing-the-server) for more information.
