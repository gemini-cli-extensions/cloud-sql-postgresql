---
name: cloudsql-postgres-admin
description: skill for performing administrative operations on cloudsql postgres
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

### create_backup

Creates a backup on a Cloud SQL instance.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| instance | string | Cloud SQL instance ID. This does not include the project ID. | Yes |  |
| location | string | Location of the backup run. | No |  |
| backup_description | string | The description of this backup run. | No |  |


---

### create_database



#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| instance | string | The ID of the instance where the database will be created. | Yes |  |
| name | string | The name for the new database. Must be unique within the instance. | Yes |  |


---

### create_instance



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

### postgres_upgrade_precheck

Analyzes a Cloud SQL PostgreSQL instance for major version upgrade readiness. Results are provided to guide customer actions:
ERROR: Action Required. These are critical issues blocking the upgrade. Customers must resolve these using the provided actions_required steps before attempting the upgrade.
WARNING: Review Recommended. These are potential issues. Customers should review the message and actions_required. While not blocking, addressing these is advised to prevent future problems or unexpected behavior post-upgrade.
INFO: No Action Needed. Informational messages only. This pre-check helps customers proactively fix problems, preventing upgrade failures and ensuring a smoother transition.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| instance | string | The name of the instance to check | Yes |  |
| targetDatabaseVersion | string | The target PostgreSQL version for the upgrade (e.g., POSTGRES_18). If not specified, defaults to the PostgreSQL 18. | No | `POSTGRES_18` |


---

### restore_backup

Restores a backup on a Cloud SQL instance.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| target_project | string | The project ID | Yes |  |
| target_instance | string | Cloud SQL instance ID of the target instance. This does not include the project ID. | Yes |  |
| backup_id | string | Identifier of the backup being restored. Can be a BackupRun ID, backup name, or BackupDR backup name. Use the full backup ID as provided, do not try to parse it | Yes |  |
| source_project | string | GCP project ID of the instance that the backup belongs to. Only required if the backup_id is a BackupRun ID. | No |  |
| source_instance | string | Cloud SQL instance ID of the instance that the backup belongs to. Only required if the backup_id is a BackupRun ID. | No |  |


---

### wait_for_operation



#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| project | string | The project ID | Yes |  |
| operation | string | The operation ID | Yes |  |


---

