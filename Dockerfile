# --- Final Runtime Image ---
# Using python:3.11 as the base image to support evaluations that require Python,
# while still running the pre-compiled Go binary for the toolbox server.
FROM python:3.11

# Install necessary runtime certificates, standard C libraries, and curl
RUN apt-get update && apt-get install -y ca-certificates libc6 curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Dynamically fetch the latest version and download the binary
RUN LATEST_VERSION=$(curl -s https://api.github.com/repos/googleapis/mcp-toolbox/releases/latest | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/') && \
    curl -L https://storage.googleapis.com/mcp-toolbox-for-databases/${LATEST_VERSION}/linux/amd64/toolbox -o /app/toolbox
RUN chmod +x /app/toolbox

# Copy the extension's skills and configuration into the container
COPY skills/ ./skills/
COPY gemini-extension.json .

# Add required tools.yaml placeholder to satisfy binary startup checks
RUN touch tools.yaml

# Expose HTTP API and UI endpoints to successfully pass Cloud Run health checks
ENTRYPOINT ["/app/toolbox", "--prebuilt", "cloud-sql-postgres", "--address=0.0.0.0", "--port=8080", "--enable-api", "--ui"]
