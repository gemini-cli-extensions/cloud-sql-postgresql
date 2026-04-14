./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-admin" --description "Use these skills when you need to provision new Cloud SQL instances, create databases and users, clone existing environments, and monitor the progress of long-running operations." --toolset=admin  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-lifecycle" --description "Use these skills when you need to manage the lifecycle of your instances, including performing backups and restores, checking major version upgrade compatibility, and monitoring overall instance status." --toolset=lifecycle  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-data" --description "Use these skills when you need to explore the database structure, discover schema objects like views or stored procedures, and execute custom SQL queries to interact with your data." --toolset=data  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-monitor" --description "Use these skills when you need to troubleshoot performance bottlenecks, analyze query execution plans, identify resource-heavy processes, and monitor system-level PromQL metrics." --toolset=monitor  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-health" --description "Use these skills when you need to audit database health, identify storage bloat, find invalid indexes, analyze table statistics, and manage maintenance configurations like autovacuum." --toolset=monitor  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-view-config" --description "Use these skills when you need to discover and manage PostgreSQL extensions or fine-tune engine-level settings such as memory allocation and server configuration parameters." --toolset=view-config  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-replication" --description "Use these skills when you need to monitor replication health, manage sync states between nodes, and audit database roles and security settings to ensure environment integrity." --toolset=replication  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."

./toolbox2 --prebuilt cloud-sql-postgres skills-generate --name "cloud-sql-postgres-vectorassist" --description "Use these skills to set up and optimize production-ready vector workloads by simply expressing your intent and performance requirements" --toolset=vectorassist  --license-header "// Copyright 2026 Google LLC
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
// limitations under the License." --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."
