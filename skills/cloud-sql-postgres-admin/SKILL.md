---
name: cloud-sql-postgres-admin
description: Use these skills when you need to provision new Cloud SQL instances, create databases and users, clone existing environments, and monitor the progress of long-running operations.
---

## Usage

All scripts can be executed using Node.js. Replace `<param_name>` and `<param_value>` with actual values.

**Bash:**
`node <skill_dir>/scripts/<script_name>.js '{"<param_name>": "<param_value>"}'`

**PowerShell:**
`node <skill_dir>/scripts/<script_name>.js '{\"<param_name>\": \"<param_value>\"}'`

Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence.


## Scripts


### clone_instance

Clone an existing Cloud SQL instance into a new instance. The clone can be a direct copy of the source instance, or a point-in-time-recovery (PITR) clone from a specific timestamp. The call returns a Cloud SQL Operation object. Call wait_for_operation tool after this, make sure to use multiplier as 4 to poll the opertation status till it is marked DONE.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| sourceInstanceName | string | The name of the instance to be cloned. | Yes |  |
| destinationInstanceName | string | The name of the new instance that will be created by cloning the source instance. | Yes |  |
| pointInTime | string | The timestamp in RFC 3339 format to which the source instance should be cloned. | No |  |
| preferredZone | string | The preferred zone for the new instance. | No |  |
| preferredSecondaryZone | string | The preferred secondary zone for the new instance. | No |  |


---

### create_database

Creates a new database in a Cloud SQL instance.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| instance | string | The ID of the instance where the database will be created. | Yes |  |
| name | string | The name for the new database. Must be unique within the instance. | Yes |  |


---

### create_instance

Creates a Postgres instance using `Production` and `Development` presets. For the `Development` template, it chooses a 2 vCPU, 16 GiB RAM, 100 GiB SSD configuration with Non-HA/zonal availability. For the `Production` template, it chooses an 8 vCPU, 64 GiB RAM, 250 GiB SSD configuration with HA/regional availability. The Enterprise Plus edition is used in both cases. The default database version is `POSTGRES_17`. The agent should ask the user if they want to use a different version.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| name | string | The name of the instance | Yes |  |
| databaseVersion | string | The database version for Postgres. If not specified, defaults to the latest available version (e.g., POSTGRES_17). | No | `POSTGRES_17` |
| rootPassword | string | The root password for the instance | Yes |  |
| editionPreset | string | The edition of the instance. Can be `Production` or `Development`. This determines the default machine type and availability. Defaults to `Development`. | No | `Development` |


---

### create_user

Creates a new user in a Cloud SQL instance. Both built-in and IAM users are supported. IAM users require an email account as the user name. IAM is the more secure and recommended way to manage users. The agent should always ask the user what type of user they want to create. For more information, see https://cloud.google.com/sql/docs/postgres/add-manage-iam-users

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| instance | string | The ID of the instance where the user will be created. | Yes |  |
| name | string | The name for the new user. Must be unique within the instance. | Yes |  |
| password | string | A secure password for the new user. Not required for IAM users. | No |  |
| iamUser | boolean | Set to true to create a Cloud IAM user. | Yes |  |


---

### get_instance

Gets a particular cloud sql instance.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| projectId | string | The project ID | Yes |  |
| instanceId | string | The instance ID | Yes |  |


---

### list_databases

Lists all databases for a Cloud SQL instance.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| instance | string | The instance ID | Yes |  |


---

### list_instances

Lists all type of Cloud SQL instances for a project.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |


---

### wait_for_operation

This will poll on operations API until the operation is done. For checking operation status we need projectId and operationId. Once instance is created give follow up steps on how to use the variables to bring data plane MCP server up in local and remote setup.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| operation | string | The operation ID | Yes |  |


---

