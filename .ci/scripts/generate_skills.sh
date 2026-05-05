#!/bin/bash
set -e

# Ensure VERSION is passed from the environment
if [ -z "$VERSION" ]; then
  echo "Error: VERSION environment variable is not set."
  exit 1
fi

echo "Generating skills via npx using toolbox version: $VERSION..."

# Common Variables
LICENSE_HEADER="// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the \"License\");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an \"AS IS\" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License."

ADDITIONAL_NOTES="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

# Execution Logic
generate_skill() {
  local TOOLSET="$2"
  local SKILL_DESC="$3"
  local SKILL_NAME="cloud-sql-postgres-$TOOLSET"

  echo "Generating skill: $SKILL_NAME (toolset: $TOOLSET)..."
  
  npx "@toolbox-sdk/server@${VERSION}" --prebuilt cloud-sql-postgres skills-generate \
    --name "$SKILL_NAME" \
    --description "$SKILL_DESC" \
    --toolset="$TOOLSET" \
    --license-header "$LICENSE_HEADER" \
    --additional-notes="$ADDITIONAL_NOTES"
}

# register_skill <toolset> <description>
register_skill() {
  generate_skill "$1" "$2"
}

register_skill "admin" \
  "Use these skills when you need to provision new Cloud SQL instances, create databases and users, clone existing environments, and monitor the progress of long-running operations."

register_skill "lifecycle" \
  "Use these skills when you need to manage the lifecycle of your instances, including performing backups and restores, checking major version upgrade compatibility, and monitoring overall instance status."

register_skill "data" \
  "Use these skills when you need to explore the database structure, discover schema objects like views or stored procedures, and execute custom SQL queries to interact with your data."

register_skill "monitor" \
  "Use these skills when you need to troubleshoot performance bottlenecks, analyze query execution plans, identify resource-heavy processes, and monitor system-level PromQL metrics."

register_skill "health" \
  "Use these skills when you need to audit database health, identify storage bloat, find invalid indexes, analyze table statistics, and manage maintenance configurations like autovacuum."

register_skill "view-config"  \
  "Use these skills when you need to discover and manage PostgreSQL extensions or fine-tune engine-level settings such as memory allocation and server configuration parameters."

register_skill "replication" \
  "Use these skills when you need to monitor replication health, manage sync states between nodes, and audit database roles and security settings to ensure environment integrity."

register_skill "vectorassist" \
  "Use these skills to set up and optimize production-ready vector workloads by simply expressing your intent and performance requirements"

echo "All skills generated successfully!"
