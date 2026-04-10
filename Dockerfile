# --- Stage 1: Build the binary from source (Latest Nightly) ---
FROM golang:1.25 AS builder

WORKDIR /build

# Clone the official genai-toolbox source code (always latest main branch)
RUN git clone --depth 1 https://github.com/googleapis/genai-toolbox.git .

# Compile the binary with CGO ENABLED to support all upstream database drivers (Oracle, etc.)
RUN CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -o toolbox .

# --- Stage 2: Final Lightweight Runtime Image ---
# Using the exact same image (golang:1.25) for runtime to perfectly match GLIBC versions
FROM golang:1.25


# Install necessary runtime certificates and standard C libraries for CGO binary
RUN apt-get update && apt-get install -y ca-certificates libc6 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the freshly compiled binary from the builder stage
COPY --from=builder /build/toolbox /app/toolbox
RUN chmod +x /app/toolbox

# Copy the extension's skills and configuration into the container
COPY skills/ ./skills/
COPY gemini-extension.json .

# Add required tools.yaml placeholder to satisfy binary startup checks
RUN touch tools.yaml

# Expose HTTP API and UI endpoints to successfully pass Cloud Run health checks
ENTRYPOINT ["/app/toolbox", "--prebuilt", "cloud-sql-postgres", "--address=0.0.0.0", "--port=8080", "--enable-api", "--ui"]


