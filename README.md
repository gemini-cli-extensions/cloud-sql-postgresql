# Cloud SQL for PostgreSQL Agent Skills

> [!NOTE]
> These skills are currently in beta (pre-v1.0), and may see breaking changes until the first stable release (v1.0).

This repository provides a set of agent skills to interact with [Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres) instances. These skills can be used with various AI agents, including [Gemini CLI](https://google-gemini.github.io/gemini-cli/), Claude Code, and Codex, to manage your databases, execute queries, explore schemas, and troubleshoot issues using natural language prompts.

> [!IMPORTANT]
> **We Want Your Feedback!**
> Please share your thoughts with us by filling out our feedback [form][form].
> Your input is invaluable and helps us improve the project for everyone.

[form]: https://docs.google.com/forms/d/e/1FAIpQLSfEGmLR46iipyNTgwTmIDJqzkAwDPXxbocpXpUbHXydiN1RTw/viewform?usp=pp_url&entry.157487=cloud-sql-postgresql

## Why Use Cloud SQL for PostgreSQL Agent Skills?

- **Seamless Workflow:** Integrates seamlessly into your AI agent's environment. No need to constantly switch contexts for common database tasks.
- **Natural Language Queries:** Stop wrestling with complex commands. Explore schemas and query data by describing what you want in plain English.
- **Full Lifecycle Control:** Manage the entire lifecycle of your database, from creating instances to exploring schemas and running queries.
- **Code Generation:** Accelerate development by asking your agent to generate data classes and other code snippets based on your table schemas.

## Prerequisites

Before you begin, ensure you have the following:

- An AI agent installed (e.g., [Gemini CLI](https://github.com/google-gemini/gemini-cli) version **+v0.6.0**, [Claude Code](https://claude.ai/install.sh), or [Codex](https://openai.com/blog/openai-codex/)).
- A Google Cloud project with the **Cloud SQL Admin API** enabled.
- Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
- IAM Permissions:
  - Cloud SQL Client (`roles/cloudsql.client`)
  - Cloud SQL Admin (`roles/cloudsql.admin`)

> [!NOTE]
> If you do not configure a specific `CLOUD_SQL_POSTGRES_USER` or `CLOUD_SQL_POSTGRES_PASSWORD`, these skills default to using the active local IAM user credentials. You must also add the IAM user to your Cloud SQL instance, see [Creating a database user](https://cloud.google.com/sql/docs/postgres/add-manage-iam-users#creating-a-database-user).

## Getting Started

### Installation & Usage

To start interacting with your database, install the skills for your preferred AI agent, then launch the agent and use natural language to ask questions or perform tasks.

#### Gemini CLI

**1. Install the extension:**
```bash
gemini extensions install https://github.com/gemini-cli-extensions/cloud-sql-postgresql
```

**2. (Optional) Manage Configuration:**
To view or update your configuration in Gemini CLI:
- Terminal: `gemini extensions config cloud-sql-postgresql [setting name] [--scope <scope>]`
- Gemini CLI: `/extensions list`

**3. Start the agent:**
```bash
gemini
```
_(Tip: Run `/extensions list` to verify your configuration and active extensions.)_

#### Claude Code

**1. Start the agent:**
```bash
claude
```

**2. Add the marketplace:**
```bash
/plugin marketplace add gemini-cli-extensions/cloud-sql-postgresql
```

**3. Install the plugin:**
```bash
/plugin install cloud-sql-postgresql@google-data-cloud-skills
```
_(Tip: Run `/plugin list` inside Claude Code to verify the plugin is active, or `/reload-plugins` if you just installed it.)_

#### Codex

**1. Clone the Repo:**
```bash
git clone git@github.com:gemini-cli-extensions/cloud-sql-postgresql.git
```

**2. Install the plugin:**
```bash
mkdir -p ~/.codex/plugins
cp -R /absolute/path/to/cloud-sql-postgresql ~/.codex/plugins/cloud-sql-postgresql
```

**3. Create or update marketplace.json:**
`~/.agents/plugins/marketplace.json`
```json
{
  "name": "google-data-cloud-skills",
  "interface": {
    "displayName": "Google Data Cloud Skills"
  },
  "plugins": [
    {
      "name": "cloud-sql-postgresql",
      "source": {
        "source": "local",
        "path": "./plugins/cloud-sql-postgresql"
      },
      "policy": {
        "installation": "AVAILABLE",
        "authentication": "ON_INSTALL"
      },
      "category": "Database"
    }
  ]
}

```

_(Tip: Run `codex plugin list` or use the `/plugins` interactive menu to verify your installed plugins.)_

### Configuration

You may be prompted to configure the following settings during installation. These settings can also be set as environment variables.

- `CLOUD_SQL_POSTGRES_PROJECT`: The GCP project ID.
- `CLOUD_SQL_POSTGRES_REGION`: The region of your Cloud SQL instance.
- `CLOUD_SQL_POSTGRES_INSTANCE`: The ID of your Cloud SQL instance.
- `CLOUD_SQL_POSTGRES_DATABASE`: The name of the database to connect to.
- `CLOUD_SQL_POSTGRES_USER`: (Optional) The database username. Defaults to the active IAM user.
- `CLOUD_SQL_POSTGRES_PASSWORD`: (Optional) The password for the database user.
- `CLOUD_SQL_POSTGRES_IP_TYPE`: (Optional) Type of the IP address: `PUBLIC`, `PRIVATE`, or `PSC`. Defaults to `PUBLIC`.

> [!NOTE]
>
> - Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
> - If your Cloud SQL for PostgreSQL instance uses private IPs, you must run your agent in the same Virtual Private Cloud (VPC) network.

> [!WARNING]
> **Changing Instance & Database Connections**
> Currently, the database connection must be configured before starting the agent and can not be changed during a session.
> To save and resume conversation history in Gemini CLI use command: `/chat save <tag>` and `/chat resume <tag>`.

## Usage Examples

Interact with Cloud SQL for PostgreSQL using natural language:

- **Provision Infrastructure:**
  - "Create a new Cloud SQL for Postgres instance named 'e-commerce-prod' in the 'my-gcp-project' project."
  - "Create a new user named 'analyst' with read access to all tables."
- **Explore Schemas and Data:**
  - "Show me all tables in the 'orders' database."
  - "What are the columns in the 'products' table?"
  - "How many orders were placed in the last 30 days, and what were the top 5 most purchased items?"
- **Generate Code:**
  - "Generate a Python dataclass to represent the 'customers' table."

## Supported Skills

The following skills are available in this repository:

- [Cloud SQL for PostgreSQL Admin](./skills/cloud-sql-postgres-admin/SKILL.md) - Use these skills when you need to provision new Cloud SQL instances, create databases and users, clone existing environments, and monitor the progress of long-running operations.
- [Cloud SQL for PostgreSQL Data](./skills/cloud-sql-postgres-data/SKILL.md) - Use these skills when you need to explore the database structure, discover schema objects like views or stored procedures, and execute custom SQL queries to interact with your data.
- [Cloud SQL for PostgreSQL Health](./skills/cloud-sql-postgres-health/SKILL.md) - Use these skills when you need to audit database health, identify storage bloat, find invalid indexes, analyze table statistics, and manage maintenance configurations like autovacuum.
- [Cloud SQL for PostgreSQL Lifecycle](./skills/cloud-sql-postgres-lifecycle/SKILL.md) - Use these skills when you need to manage the lifecycle of your instances, including performing backups and restores, checking major version upgrade compatibility, and monitoring overall instance status.
- [Cloud SQL for PostgreSQL Monitor](./skills/cloud-sql-postgres-monitor/SKILL.md) - Use these skills when you need to troubleshoot performance bottlenecks, analyze query execution plans, identify resource-heavy processes, and monitor system-level PromQL metrics.
- [Cloud SQL for PostgreSQL Replication](./skills/cloud-sql-postgres-replication/SKILL.md) - Use these skills when you need to monitor replication health, manage sync states between nodes, and audit database roles and security settings to ensure environment integrity.
- [Cloud SQL for PostgreSQL View Config](./skills/cloud-sql-postgres-view-config/SKILL.md) - Use these skills when you need to discover and manage PostgreSQL extensions or fine-tune engine-level settings such as memory allocation and server configuration parameters.

## Additional Agent Skills

Find additional skills to support your entire software development lifecycle at [github.com/gemini-cli-extensions](https://github.com/gemini-cli-extensions), including:

- [Generic PostgreSQL skills](https://github.com/gemini-cli-extensions/postgres)
- [Cloud SQL for PostgreSQL Observability skills](https://github.com/gemini-cli-extensions/cloud-sql-postgresql-observability)
- and more!

## Troubleshooting

Use the debug mode of your agent (e.g., `gemini --debug`) to enable debugging.

Common issues:

- "failed to find default credentials: google: could not find default credentials.": Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/external/set-up-adc) for more information.
- "✖ Error during discovery for server: MCP error -32000: Connection closed": The database connection has not been established. Ensure your configuration is set via environment variables.
- "✖ MCP ERROR: Error: spawn .../toolbox ENOENT": The Toolbox binary did not download correctly. Ensure you are using the latest version of your agent.
- "cannot execute binary file": The Toolbox binary did not download correctly. Ensure the correct binary for your OS/Architecture has been downloaded. See [Installing the server](https://mcp-toolbox.dev/documentation/introduction/#install-toolbox) for more information.
