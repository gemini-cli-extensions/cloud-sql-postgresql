# Gemini CLI Extension - Cloud SQL for PostgreSQL

> [!NOTE]
> This extension is currently in beta (pre-v1.0), and may see breaking changes until the first stable release (v1.0).

This Gemini CLI extension provides a set of skills to interact with [Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres) instances. It allows you to manage your databases, execute queries, explore schemas, and troubleshoot issues directly from the [Gemini CLI](https://google-gemini.github.io/gemini-cli/), using natural language prompts.

Learn more about [Gemini CLI Extensions](https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/index.md).
> [!IMPORTANT]
> **We Want Your Feedback!**
> Please share your thoughts with us by filling out our feedback [form][form]. 
> Your input is invaluable and helps us improve the project for everyone.

[form]: https://docs.google.com/forms/d/e/1FAIpQLSfEGmLR46iipyNTgwTmIDJqzkAwDPXxbocpXpUbHXydiN1RTw/viewform?usp=pp_url&entry.157487=cloud-sql-postgresql

## Why Use the Cloud SQL for PostgreSQL Extension?

* **Seamless Workflow:** As a Google-developed extension, it integrates seamlessly into the Gemini CLI environment. No need to constantly switch contexts for common database tasks.
* **Natural Language Queries:** Stop wrestling with complex commands. Explore schemas and query data by describing what you want in plain English.
* **Full Lifecycle Control:** Manage the entire lifecycle of your database, from creating instances to exploring schemas and running queries.
* **Code Generation:** Accelerate development by asking Gemini to generate data classes and other code snippets based on your table schemas.


## Prerequisites

Before you begin, ensure you have the following:

* [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed with version **+v0.6.0**.
* Setup Gemini CLI [Authentication](https://github.com/google-gemini/gemini-cli/tree/main?tab=readme-ov-file#-authentication-options).
* A Google Cloud project with the **Cloud SQL Admin API** enabled.
* Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
* IAM Permissions:
  * Cloud SQL Client (`roles/cloudsql.client`)
  * Cloud SQL Admin (`roles/cloudsql.admin`)
> [!NOTE]
> If you do not configure a specific `CLOUD_SQL_POSTGRES_USER` or `CLOUD_SQL_POSTGRES_PASSWORD`, this extension defaults to using the active local IAM user credentials. You must also add the IAM user to your Cloud SQL instance, see [Creating a database user](https://cloud.google.com/sql/docs/postgres/add-manage-iam-users#creating-a-database-user).

## Getting Started

### Installation

To install the extension, use the command:

```bash
gemini extensions install https://github.com/gemini-cli-extensions/cloud-sql-postgresql
```

### Configuration

You will be prompted to configure the following settings during installation. These settings are saved in an `.env` file within the extension's directory.

*   `CLOUD_SQL_POSTGRES_PROJECT`: The GCP project ID.
*   `CLOUD_SQL_POSTGRES_REGION`: The region of your Cloud SQL instance.
*   `CLOUD_SQL_POSTGRES_INSTANCE`: The ID of your Cloud SQL instance.
*   `CLOUD_SQL_POSTGRES_DATABASE`: The name of the database to connect to.
*   `CLOUD_SQL_POSTGRES_USER`: (Optional) The database username. Defaults to the active IAM user.
*   `CLOUD_SQL_POSTGRES_PASSWORD`: (Optional) The password for the database user.
*   `CLOUD_SQL_POSTGRES_IP_TYPE`: (Optional) Type of the IP address: `PUBLIC`, `PRIVATE`, or `PSC`. Defaults to `PUBLIC`.

> [!NOTE]
> This configuration is primarily for the Data Plane skills (querying). The Admin skillset does not strictly require these to be pre-set if you provide them in your prompts, but it is recommended for a smoother experience.

To view or update your configuration:

**List Settings:**
*   Terminal: `gemini extensions list`
*   Gemini CLI: `/extensions list`

**Update Settings:**
*   Terminal: `gemini extensions config cloud-sql-postgresql [setting name] [--scope <scope>]`
    *   `setting name`: (Optional) The single setting to configure.
    *   `scope`: (Optional) The scope of the setting in (`user` or `workspace`). Defaults to `user`.
*   Currently, you must restart the Gemini CLI for changes to take effect. We recommend using `gemini --resume` to resume your session.

Alternatively, you can manually set these environment variables before starting the Gemini CLI:

```bash
export CLOUD_SQL_POSTGRES_PROJECT="<your-gcp-project-id>"
export CLOUD_SQL_POSTGRES_REGION="<your-cloud-sql-region>"
export CLOUD_SQL_POSTGRES_INSTANCE="<your-cloud-sql-instance-id>"
export CLOUD_SQL_POSTGRES_DATABASE="<your-database-name>"
export CLOUD_SQL_POSTGRES_USER="<your-database-user>"  # Optional
export CLOUD_SQL_POSTGRES_PASSWORD="<your-database-password>"  # Optional
export CLOUD_SQL_POSTGRES_IP_TYPE="PUBLIC" # Optional: `PUBLIC`, `PRIVATE`, `PSC`. Defaults to `PUBLIC`.
```

> [!NOTE]
> * Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
> * If your Cloud SQL for PostgreSQL instance uses private IPs, you must run Gemini CLI in the same Virtual Private Cloud (VPC) network.
> * See [Troubleshooting](#troubleshooting) for debugging your configuration.

### Start Gemini CLI

To start the Gemini CLI, use the following command:

```bash
gemini
```

> [!WARNING]
> **Changing Instance & Database Connections**
> Currently, the database connection must be configured before starting the Gemini CLI and can not be changed during a session.
> To save and resume conversation history use command: `/chat save <tag>` and `/chat resume <tag>`.

## Usage Examples

Interact with Cloud SQL for PostgreSQL using natural language:

* **Provision Infrastructure:**
    * "Create a new CLoud SQL for Postgres instance named 'e-commerce-prod' in the 'my-gcp-project' project."
    * "Create a new user named 'analyst' with read access to all tables."
* **Explore Schemas and Data:**
  * "Show me all tables in the 'orders' database."
  * "What are the columns in the 'products' table?"
  * "How many orders were placed in the last 30 days, and what were the top 5 most purchased items?"
* **Generate Code:**
  * "Generate a Python dataclass to represent the 'customers' table."

## Supported Skills

This extension provides the following skills:

* [Cloud SQL for PostgreSQL Admin](skills/cloudsql-postgres-admin/SKILL.md) - Manage Cloud SQL instances, databases, and users.
* [Cloud SQL for PostgreSQL](skills/cloudsql-postgres/SKILL.md) - Query databases and manage extensions.

## Additional Extensions

Find additional extensions to support your entire software development lifecycle at [github.com/gemini-cli-extensions](https://github.com/gemini-cli-extensions), including:
* [Generic PostgreSQL extension](https://github.com/gemini-cli-extensions/postgres)
* [Cloud SQL for PostgreSQL Observability extension](https://github.com/gemini-cli-extensions/cloud-sql-postgresql-observability)
* and more!

## Troubleshooting

Use `gemini --debug` to enable debugging.

Common issues:

* "failed to find default credentials: google: could not find default credentials.": Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/external/set-up-adc) for more information.
* "✖ Error during discovery for server: MCP error -32000: Connection closed": The database connection has not been established. Ensure your configuration is set via environment variables.
* "✖ MCP ERROR: Error: spawn /Users/USER/.gemini/extensions/cloud-sql-postgresql/toolbox ENOENT": The Toolbox binary did not download correctly. Ensure you are using Gemini CLI v0.6.0+.
* "cannot execute binary file": The Toolbox binary did not download correctly. Ensure the correct binary for your OS/Architecture has been downloaded. See [Installing the server](https://googleapis.github.io/genai-toolbox/getting-started/introduction/#installing-the-server) for more information.
