# Cloud SQL for PostgreSQL Extension

This document provides instructions for the Gemini agent to assist users with the Cloud SQL for PostgreSQL extension.

## Cloud SQL for PostgreSQL MCP Server (Data Plane: Connecting and Querying)

This section covers connecting to a Cloud SQL for PostgreSQL instance.

1.  **Verify Environment Variables**: Before attempting to connect, confirm with the user that the following environment variables are set in the extension configuration or their shell environment.

    *   `CLOUD_SQL_POSTGRES_PROJECT`: The GCP project ID.
    *   `CLOUD_SQL_POSTGRES_REGION`: The region of your Cloud SQL instance.
    *   `CLOUD_SQL_POSTGRES_INSTANCE`: The ID of your Cloud SQL instance.
    *   `CLOUD_SQL_POSTGRES_DATABASE`: The name of the database to connect to.
    *   `CLOUD_SQL_POSTGRES_USER`: The database username.
    *   `CLOUD_SQL_POSTGRES_PASSWORD`: The password for the database user.

2.  **Handle Missing Variables**: If a command fails with an error message containing a placeholder like `${CLOUD_SQL_POSTGRES_PROJECT}`, it signifies a missing environment variable. Inform the user which variable is missing and instruct them to set it.

3.  **Handle Permission Errors**: If you encounter permission errors, ensure the user has the **Cloud SQL Client** (`roles/cloudsql.client`) role and the correct database-level permissions.
