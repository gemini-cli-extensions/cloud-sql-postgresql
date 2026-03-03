---
name: cloudsql-postgres-admin
description: skill for performing administrative operations on cloudsql postgres
---

## Usage

All scripts can be executed using Node.js. Replace `<param_name>` and `<param_value>` with actual values.

**Bash:**
`node scripts/<script_name>.js '{"<param_name>": "<param_value>"}'`

**PowerShell:**
`node scripts/<script_name>.js '{\"<param_name>\": \"<param_value>\"}'`

## Scripts

### clone_instance

Clone an existing Cloud SQL instance into a new instance. The clone can be a direct copy of the source instance, or a point-in-time-recovery (PITR) clone from a specific timestamp. The call returns a Cloud SQL Operation object. Call wait_for_operation tool after this, make sure to use multiplier as 4 to poll the opertation status till it is marked DONE.

#### Parameters

```json
{
  "properties": {
    "destinationInstanceName": {
      "description": "The name of the new instance that will be created by cloning the source instance.",
      "type": "string"
    },
    "pointInTime": {
      "description": "The timestamp in RFC 3339 format to which the source instance should be cloned.",
      "type": "string"
    },
    "preferredSecondaryZone": {
      "description": "The preferred secondary zone for the new instance.",
      "type": "string"
    },
    "preferredZone": {
      "description": "The preferred zone for the new instance.",
      "type": "string"
    },
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    },
    "sourceInstanceName": {
      "description": "The name of the instance to be cloned.",
      "type": "string"
    }
  },
  "required": ["sourceInstanceName", "destinationInstanceName"],
  "type": "object"
}
```

---

### create_backup

Creates a backup on a Cloud SQL instance.

#### Parameters

```json
{
  "properties": {
    "backup_description": {
      "description": "The description of this backup run.",
      "type": "string"
    },
    "instance": {
      "description": "Cloud SQL instance ID. This does not include the project ID.",
      "type": "string"
    },
    "location": {
      "description": "Location of the backup run.",
      "type": "string"
    },
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": ["instance"],
  "type": "object"
}
```

---

### create_database

#### Parameters

```json
{
  "properties": {
    "instance": {
      "description": "The ID of the instance where the database will be created.",
      "type": "string"
    },
    "name": {
      "description": "The name for the new database. Must be unique within the instance.",
      "type": "string"
    },
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": ["instance", "name"],
  "type": "object"
}
```

---

### create_instance

#### Parameters

```json
{
  "properties": {
    "databaseVersion": {
      "default": "POSTGRES_17",
      "description": "The database version for Postgres. If not specified, defaults to the latest available version (e.g., POSTGRES_17).",
      "type": "string"
    },
    "editionPreset": {
      "default": "Development",
      "description": "The edition of the instance. Can be `Production` or `Development`. This determines the default machine type and availability. Defaults to `Development`.",
      "type": "string"
    },
    "name": {
      "description": "The name of the instance",
      "type": "string"
    },
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    },
    "rootPassword": {
      "description": "The root password for the instance",
      "type": "string"
    }
  },
  "required": ["name", "rootPassword"],
  "type": "object"
}
```

---

### create_user

#### Parameters

```json
{
  "properties": {
    "iamUser": {
      "description": "Set to true to create a Cloud IAM user.",
      "type": "boolean"
    },
    "instance": {
      "description": "The ID of the instance where the user will be created.",
      "type": "string"
    },
    "name": {
      "description": "The name for the new user. Must be unique within the instance.",
      "type": "string"
    },
    "password": {
      "description": "A secure password for the new user. Not required for IAM users.",
      "type": "string"
    },
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": ["instance", "name", "iamUser"],
  "type": "object"
}
```

---

### get_instance

#### Parameters

```json
{
  "properties": {
    "instanceId": {
      "description": "The instance ID",
      "type": "string"
    },
    "projectId": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": ["instanceId"],
  "type": "object"
}
```

---

### list_databases

Lists all databases for a Cloud SQL instance.

#### Parameters

```json
{
  "properties": {
    "instance": {
      "description": "The instance ID",
      "type": "string"
    },
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": ["instance"],
  "type": "object"
}
```

---

### list_instances

Lists all type of Cloud SQL instances for a project.

#### Parameters

```json
{
  "properties": {
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### postgres_upgrade_precheck

Analyzes a Cloud SQL PostgreSQL instance for major version upgrade readiness. Results are provided to guide customer actions:
ERROR: Action Required. These are critical issues blocking the upgrade. Customers must resolve these using the provided actions_required steps before attempting the upgrade.
WARNING: Review Recommended. These are potential issues. Customers should review the message and actions_required. While not blocking, addressing these is advised to prevent future problems or unexpected behavior post-upgrade.
INFO: No Action Needed. Informational messages only. This pre-check helps customers proactively fix problems, preventing upgrade failures and ensuring a smoother transition.

#### Parameters

```json
{
  "properties": {
    "instance": {
      "description": "The name of the instance to check",
      "type": "string"
    },
    "project": {
      "description": "The project ID",
      "type": "string"
    },
    "targetDatabaseVersion": {
      "default": "POSTGRES_18",
      "description": "The target PostgreSQL version for the upgrade (e.g., POSTGRES_18). If not specified, defaults to the PostgreSQL 18.",
      "type": "string"
    }
  },
  "required": ["project", "instance"],
  "type": "object"
}
```

---

### restore_backup

Restores a backup on a Cloud SQL instance.

#### Parameters

```json
{
  "properties": {
    "backup_id": {
      "description": "Identifier of the backup being restored. Can be a BackupRun ID, backup name, or BackupDR backup name. Use the full backup ID as provided, do not try to parse it",
      "type": "string"
    },
    "source_instance": {
      "description": "Cloud SQL instance ID of the instance that the backup belongs to. Only required if the backup_id is a BackupRun ID.",
      "type": "string"
    },
    "source_project": {
      "description": "GCP project ID of the instance that the backup belongs to. Only required if the backup_id is a BackupRun ID.",
      "type": "string"
    },
    "target_instance": {
      "description": "Cloud SQL instance ID of the target instance. This does not include the project ID.",
      "type": "string"
    },
    "target_project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": ["target_instance", "backup_id"],
  "type": "object"
}
```

---

### wait_for_operation

#### Parameters

```json
{
  "properties": {
    "operation": {
      "description": "The operation ID",
      "type": "string"
    },
    "project": {
      "default": "twisha-dev",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": ["operation"],
  "type": "object"
}
```

---
