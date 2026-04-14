---
name: cloud-sql-postgres-vectorassist
description: Use these skills to set up and optimize production-ready vector workloads by simply expressing your intent and performance requirements.
---

## Usage

All scripts can be executed using Node.js. Replace `<param_name>` and `<param_value>` with actual values.

**Bash:**
`node <skill_dir>/scripts/<script_name>.js '{"<param_name>": "<param_value>"}'`

**PowerShell:**
`node <skill_dir>/scripts/<script_name>.js '{\"<param_name>\": \"<param_value>\"}'`

Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence.


## Scripts


### apply_spec

This tool automatically executes all the SQL recommendations associated with a specific vector specification (spec_id) or table. It runs the necessary commands in the correct sequence to provision the workload, marking each step as applied once successful. Use this tool when the user has reviewed the generated recommendations from a defined (or modified) spec and is ready to apply the changes directly to their database instance to finalize the vector search setup. This tool can be used as a follow-up action after invoking the 'define_spec' or 'modify_spec' tool.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| spec_id | string | The unique ID of the vector specification to apply. | No |  |
| table_name | string | The name of the table to apply the vector specification to (in case of a single spec defined on the table). | No |  |
| column_name | string | The text_column_name or vector_column_name of the spec to identify the exact spec in case there are multiple specs defined on a table. | No |  |
| schema_name | string | The schema name for the table. | No |  |


---

### define_spec

This tool defines a new vector specification by capturing the user's intent and requirements for a vector search workload. This generates a complete, ordered set of SQL recommendations required to set up the database, embeddings, and vector indexes. While highly customizable, any optional parameters left unspecified will use internally determined defaults optimized for the specific workload. Use this tool at the very beginning of the vector setup process when a user first wants to configure a table for vector search, generate embeddings, or create a new vector index.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| table_name | string | Table name on which vector workload needs to be set up. | Yes |  |
| schema_name | string | Schema containing the given table. | No |  |
| spec_id | string | Unique ID for the vector spec. Auto-generated, if not specified. | No |  |
| vector_column_name | string | Column name for the column with vector embeddings. | No |  |
| text_column_name | string | Column name for the column with text on which vector search needs to be set up. | No |  |
| vector_index_type | string | Type of the vector index to be created (Allowed inputs: 'hnsw', 'ivfflat', 'scann'). | No |  |
| embeddings_available | boolean | Boolean parameter to know if vector embeddings are already available in the table. | No |  |
| num_vectors | integer | Number of vectors expected in the dataset. | No |  |
| dimensionality | integer | If vectors are already generated, set to dimension of vectors. If not, set to dimensionality of the embedding_model. | No |  |
| embedding_model | string | Optional parameter: Model to be used for generating embeddings. If not provided, it has an internally selected default value. | No |  |
| prefilter_column_names | array | Columns based on which prefiltering will happen in vector search queries. | No |  |
| distance_func | string | Distance function to be used for comparing vectors (Allowed inputs: 'cosine', 'ip', 'l2', 'l1'). | No |  |
| quantization | string | Quantization to be used for creating the vector indexes (Allowed inputs: 'none', 'halfvec', 'bit'). | No |  |
| memory_budget_kb | integer | Maximum size in KB that the index can consume in memory while building. | No |  |
| target_recall | float | The recall that the user would like to target with the given index for standard vector queries. | No |  |
| target_top_k | integer | The top-K values that need to be retrieved for the given query. | No |  |
| tune_vector_index | boolean | Boolean parameter to specify if the auto tuning is required for the index. | No |  |


---

### execute_sql

Use this tool to execute a single SQL statement.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| sql | string | The sql to execute. | Yes |  |


---

### generate_query

This tool generates optimized SQL queries for vector search by leveraging the metadata and vector specifications defined in a specific spec_id. It may return a single query or a sequence of multiple SQL queries that can be executed sequentially. Use this tool when a user wants to perform semantic or similarity searches on their data. It serves as the primary actionable tool to invoke for generating the executable SQL required to retrieve relevant results based on vector similarity. The 'execute_sql' tool can be used as a follow-up action after invoking this tool.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| spec_id | string | Generate the vector query corresponding to this vector spec. | No |  |
| table_name | string | Generate the vector query corresponding to this table (in case of a single spec defined on the table). | No |  |
| schema_name | string | Schema name for the table related to the vector query generation. | No |  |
| column_name | string | text_column_name or vector_column_name of the spec to identify the exact spec in case there are multiple specs defined on a table. | No |  |
| search_text | string | Text search for which query needs to be generated. Embeddings are generated using the model defined in the vector spec. | No |  |
| search_vector | string | Vector for which query needs to be generated. Only one of search_text or search_vector must be populated. | No |  |
| output_column_names | array | Column names to retrieve in the output search query. Defaults to retrieving all columns. | No |  |
| top_k | integer | Number of nearest neighbors to be returned in the vector search query. Defaults to 10. | No |  |
| filter_expressions | array | Any filter expressions to be applied on the vector search query. | No |  |
| target_recall | float | The recall that the user would like to target with the given query. Overrides the spec-level target_recall. | No |  |
| iterative_index_search | boolean | Perform iterative index search for filtered queries to ensure enough results are returned. | No |  |


---

### modify_spec

This tool modifies an existing vector specification (identified by a required spec_id) with new parameters or overrides. Upon modification, it automatically recalculates and refreshes the list of generated SQL recommendations to match the updated requirements. This tool provides a way to modify column(s) in the vector spec before applying and taking action on the recommendations. While highly customizable, any optional parameters left unspecified will use internally determined defaults optimized for the specific workload. Use this tool to modify configurations established via 'define_spec' tool such as adjusting target recall, embedding models, or quantization settings, etc.

#### Parameters

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| spec_id | string | Unique ID for the vector spec you want to modify. | Yes |  |
| table_name | string | Modify the table name on which vector workload needs to be set up. | No |  |
| schema_name | string | Modify the schema containing the given table. | No |  |
| vector_column_name | string | Modify the column name for the column with vector embeddings. | No |  |
| text_column_name | string | Modify the column name for the column with text on which vector search needs to be set up. | No |  |
| vector_index_type | string | Modify the type of the vector index to be created (Allowed inputs: 'hnsw', 'ivfflat', 'scann'). | No |  |
| embeddings_available | boolean | Modify whether vector embeddings are already available in the table. | No |  |
| num_vectors | integer | Modify the number of vectors expected in the dataset. | No |  |
| dimensionality | integer | Modify the dimensionality of the vectors or embedding model. | No |  |
| embedding_model | string | Modify the model used for generating embeddings. | No |  |
| prefilter_column_names | array | Modify the column(s) based on which prefiltering will happen in vector search queries. | No |  |
| distance_func | string | Modify the distance function to be used for comparing vectors (Allowed inputs: 'cosine', 'ip', 'l2', 'l1'). | No |  |
| quantization | string | Modify the quantization to be used for creating the vector indexes (Allowed inputs: 'none', 'halfvec', 'bit'). | No |  |
| memory_budget_kb | integer | Modify the maximum size that the index can consume in memory while building. | No |  |
| target_recall | float | Modify the recall that the user would like to target with the given index. | No |  |
| target_top_k | integer | Modify the Top-K matching values that need to be retrieved for the given query. | No |  |
| tune_vector_index | boolean | Modify whether to tune vector index build and search parameters. | No |  |


---

