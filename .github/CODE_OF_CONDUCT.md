# ═══════════════════════════════════════════════════════════════
# 📦 CyberGuard AI - Python Dependencies
# ═══════════════════════════════════════════════════════════════
# Version: 2.0 | Year: 2070
# Python: 3.12+

# ═══════════════════════════════════════════════════════════════
# 🌐 Web Framework & API
# ═══════════════════════════════════════════════════════════════
fastapi==0.109.0                    # Modern, fast web framework
uvicorn[standard]==0.27.0           # ASGI server
starlette==0.35.1                   # ASGI framework
pydantic==2.5.3                     # Data validation
pydantic-settings==2.1.0            # Settings management
python-multipart==0.0.6             # Form data parsing
python-jose[cryptography]==3.3.0    # JWT tokens
passlib[bcrypt]==1.7.4              # Password hashing
python-dotenv==1.0.0                # Environment variables

# ═══════════════════════════════════════════════════════════════
# 🤖 Machine Learning & AI
# ═══════════════════════════════════════════════════════════════
torch==2.2.0+cu121                  # PyTorch with CUDA 12.1
torchvision==0.17.0+cu121           # Computer vision
torchaudio==2.2.0+cu121             # Audio processing
tensorflow==2.15.0                  # TensorFlow
keras==2.15.0                       # High-level neural networks API
scikit-learn==1.4.0                 # Machine learning library
xgboost==2.0.3                      # Gradient boosting
lightgbm==4.2.0                     # Light gradient boosting
catboost==1.2.2                     # Categorical boosting

# Deep Learning Tools
transformers==4.37.0                # Hugging Face transformers
sentence-transformers==2.3.1        # Sentence embeddings
accelerate==0.26.1                  # Distributed training
bitsandbytes==0.42.0                # 8-bit optimizers
peft==0.8.2                         # Parameter-Efficient Fine-Tuning
datasets==2.16.1                    # Dataset library

# Model Optimization
onnx==1.15.0                        # ONNX format
onnxruntime-gpu==1.17.0             # ONNX runtime with GPU
tensorrt==8.6.1                     # NVIDIA TensorRT
openvino==2023.3.0                  # Intel OpenVINO

# ═══════════════════════════════════════════════════════════════
# 🔐 Cybersecurity & Malware Analysis
# ═══════════════════════════════════════════════════════════════
yara-python==4.5.0                  # YARA pattern matching
pefile==2023.2.7                    # PE file analysis
capstone==5.0.1                     # Disassembly framework
unicorn==2.0.1                      # CPU emulator
radare2-py==5.8.8                   # Reverse engineering
androguard==3.4.0                   # Android analysis
pyelftools==0.30                    # ELF file analysis
ssdeep==3.4                         # Fuzzy hashing
magic==0.4.27                       # File type identification
volatility3==2.5.2                  # Memory forensics

# Network Security
scapy==2.5.0                        # Packet manipulation
dpkt==1.9.8                         # Packet creation
pyshark==0.6                        # Wireshark wrapper
impacket==0.11.0                    # Network protocols

# ═══════════════════════════════════════════════════════════════
# 🗄️ Databases & Caching
# ═══════════════════════════════════════════════════════════════
# PostgreSQL
psycopg2-binary==2.9.9              # PostgreSQL adapter
sqlalchemy==2.0.25                  # ORM
alembic==1.13.1                     # Database migrations
asyncpg==0.29.0                     # Async PostgreSQL

# Redis
redis==5.0.1                        # Redis client
hiredis==2.3.2                      # Redis parser (C)
redis-om==0.2.1                     # Object mapping

# MongoDB
pymongo==4.6.1                      # MongoDB driver
motor==3.3.2                        # Async MongoDB
mongoengine==0.27.0                 # ODM

# Elasticsearch
elasticsearch==8.11.1               # Elasticsearch client
elasticsearch-dsl==8.11.0           # Query DSL

# Time-Series
influxdb-client==1.39.0             # InfluxDB client

# ═══════════════════════════════════════════════════════════════
# 📊 Data Processing & Analysis
# ═══════════════════════════════════════════════════════════════
numpy==1.26.3                       # Numerical computing
pandas==2.1.4                       # Data manipulation
polars==0.20.3                      # Fast DataFrame library
scipy==1.11.4                       # Scientific computing
matplotlib==3.8.2                   # Plotting
seaborn==0.13.1                     # Statistical visualization
plotly==5.18.0                      # Interactive plots
pyarrow==14.0.2                     # Apache Arrow

# Big Data
pyspark==3.5.0                      # Apache Spark
dask[complete]==2024.1.0            # Parallel computing
ray[default]==2.9.0                 # Distributed computing

# ═══════════════════════════════════════════════════════════════
# 🔄 Task Queue & Background Jobs
# ═══════════════════════════════════════════════════════════════
celery==5.3.6                       # Distributed task queue
celery[redis]==5.3.6                # Redis backend
flower==2.0.1                       # Celery monitoring
kombu==5.3.5                        # Messaging library

# ═══════════════════════════════════════════════════════════════
# 🔐 Cryptography & Security
# ═══════════════════════════════════════════════════════════════
cryptography==42.0.0                # Cryptographic recipes
pycryptodome==3.19.1                # Cryptographic library
pyotp==2.9.0                        # OTP/2FA
bcrypt==4.1.2                       # Password hashing
argon2-cffi==23.1.0                 # Argon2 hashing

# Post-Quantum Cryptography
pqcrypto==0.1.7                     # PQC algorithms
liboqs-python==0.9.0                # Open Quantum Safe

# ═══════════════════════════════════════════════════════════════
# 🌐 HTTP & Networking
# ═══════════════════════════════════════════════════════════════
httpx==0.26.0                       # Async HTTP client
aiohttp==3.9.1                      # Async HTTP server/client
requests==2.31.0                    # HTTP library
urllib3==2.1.0                      # HTTP client
websockets==12.0                    # WebSocket library
socketio==5.10.0                    # Socket.IO
python-socketio==5.11.0             # Socket.IO client

# DNS
dnspython==2.4.2                    # DNS toolkit

# ═══════════════════════════════════════════════════════════════
# 📝 Logging & Monitoring
# ═══════════════════════════════════════════════════════════════
loguru==0.7.2                       # Logging made simple
structlog==24.1.0                   # Structured logging
python-json-logger==2.0.7           # JSON formatter

# Metrics & Tracing
prometheus-client==0.19.0           # Prometheus metrics
opentelemetry-api==1.22.0           # OpenTelemetry API
opentelemetry-sdk==1.22.0           # OpenTelemetry SDK
opentelemetry-instrumentation==0.43b0  # Auto-instrumentation
jaeger-client==4.8.0                # Jaeger tracing
sentry-sdk==1.39.2                  # Error tracking

# APM
elastic-apm==6.20.0                 # Elastic APM
newrelic==9.5.0                     # New Relic APM

# ═══════════════════════════════════════════════════════════════
# 🧪 Testing & Quality
# ═══════════════════════════════════════════════════════════════
pytest==7.4.4                       # Testing framework
pytest-cov==4.1.0                   # Coverage plugin
pytest-asyncio==0.23.3              # Async testing
pytest-mock==3.12.0                 # Mocking
pytest-benchmark==4.0.0             # Benchmarking
pytest-xdist==3.5.0                 # Parallel testing
hypothesis==6.96.1                  # Property-based testing
faker==22.0.0                       # Fake data generation
factory-boy==3.3.0                  # Test fixtures
freezegun==1.4.0                    # Time mocking

# Code Quality
black==23.12.1                      # Code formatter
isort==5.13.2                       # Import sorter
flake8==7.0.0                       # Linter
pylint==3.0.3                       # Code analyzer
mypy==1.8.0                         # Static type checker
bandit==1.7.6                       # Security linter
safety==3.0.1                       # Dependency scanner
pre-commit==3.6.0                   # Git hooks

# ═══════════════════════════════════════════════════════════════
# 📄 Documentation
# ═══════════════════════════════════════════════════════════════
mkdocs==1.5.3                       # Documentation generator
mkdocs-material==9.5.3              # Material theme
mkdocstrings[python]==0.24.0        # API docs generator
sphinx==7.2.6                       # Documentation builder
sphinx-rtd-theme==2.0.0             # ReadTheDocs theme

# ═══════════════════════════════════════════════════════════════
# 🛠️ Utilities
# ═══════════════════════════════════════════════════════════════
python-decouple==3.8                # Settings separation
click==8.1.7                        # CLI creation
typer==0.9.0                        # Modern CLI
rich==13.7.0                        # Terminal formatting
colorama==0.4.6                     # Color support
tqdm==4.66.1                        # Progress bars
tenacity==8.2.3                     # Retry library
schedule==1.2.0                     # Job scheduling
croniter==2.0.1                     # Cron parsing

# File Processing
openpyxl==3.1.2                     # Excel files
xlrd==2.0.1                         # Excel reading
python-docx==1.1.0                  # Word documents
PyPDF2==3.0.1                       # PDF processing
pdfplumber==0.10.3                  # PDF extraction
pillow==10.2.0                      # Image processing
opencv-python==4.9.0.80             # Computer vision

# Compression
zstandard==0.22.0                   # Zstd compression
lz4==4.3.3                          # LZ4 compression

# ═══════════════════════════════════════════════════════════════
# 📧 Email & Notifications
# ═══════════════════════════════════════════════════════════════
sendgrid==6.11.0                    # SendGrid API
twilio==8.11.1                      # SMS/WhatsApp
slack-sdk==3.26.2                   # Slack API
python-telegram-bot==20.7           # Telegram bot

# ═══════════════════════════════════════════════════════════════
# ☁️ Cloud & Infrastructure
# ═══════════════════════════════════════════════════════════════
# AWS
boto3==1.34.21                      # AWS SDK
botocore==1.34.21                   # AWS core
aioboto3==12.3.0                    # Async AWS

# Google Cloud
google-cloud-storage==2.14.0        # GCS
google-cloud-pubsub==2.19.0         # Pub/Sub

# Azure
azure-storage-blob==12.19.0         # Blob storage
azure-identity==1.15.0              # Authentication

# Docker
docker==7.0.0                       # Docker SDK
kubernetes==29.0.0                  # Kubernetes client

# ═══════════════════════════════════════════════════════════════
# 🤖 MLOps & Experiment Tracking
# ═══════════════════════════════════════════════════════════════
mlflow==2.10.0                      # Experiment tracking
wandb==0.16.2                       # Weights & Biases
tensorboard==2.15.1                 # TensorBoard
dvc==3.37.0                         # Data version control
great-expectations==0.18.7          # Data quality
evidently==0.4.14                   # Model monitoring

# Model Serving
tritonclient==2.41.1                # NVIDIA Triton client
tensorflow-serving-api==2.15.0      # TF Serving

# ═══════════════════════════════════════════════════════════════
# 🔧 Development Tools
# ═══════════════════════════════════════════════════════════════
ipython==8.19.0                     # Enhanced Python shell
jupyter==1.0.0                      # Jupyter notebooks
jupyterlab==4.0.10                  # JupyterLab
notebook==7.0.6                     # Jupyter Notebook
ipywidgets==8.1.1                   # Interactive widgets

# Debugging
ipdb==0.13.13                       # IPython debugger
py-spy==0.3.14                      # Profiler
memory-profiler==0.61.0             # Memory profiler

# ═══════════════════════════════════════════════════════════════
# 🌍 Internationalization
# ═══════════════════════════════════════════════════════════════
babel==2.14.0                       # i18n utilities
python-i18n==0.3.9                  # i18n support

# ═══════════════════════════════════════════════════════════════
# 📱 API Clients
# ═══════════════════════════════════════════════════════════════
stripe==7.11.0                      # Payment processing
paypalrestsdk==1.13.3               # PayPal API

# ═══════════════════════════════════════════════════════════════
# 🧬 Quantum Computing (Future-Ready)
# ═══════════════════════════════════════════════════════════════
qiskit==0.45.2                      # IBM Quantum
cirq==1.3.0                         # Google Quantum
pennylane==0.34.0                   # Quantum ML

# ═══════════════════════════════════════════════════════════════
# 📦 Package Management
# ═══════════════════════════════════════════════════════════════
pip-tools==7.3.0                    # Dependency management
pipdeptree==2.13.1                  # Dependency tree
pip-audit==2.6.3                    # Security auditing

# ═══════════════════════════════════════════════════════════════
# 🔒 Environment Isolation
# ═══════════════════════════════════════════════════════════════
virtualenv==20.25.0                 # Virtual environments
pipenv==2023.11.15                  # Dependency management

# ═══════════════════════════════════════════════════════════════
# 📝 Notes
# ═══════════════════════════════════════════════════════════════
#
# Installation:
#   pip install -r requirements.txt
#
# Update all packages:
#   pip install -U -r requirements.txt
#
# Generate requirements from environment:
#   pip freeze > requirements.txt
#
# Install with specific versions:
#   pip install -r requirements.txt --no-deps
#
# For production (without dev dependencies):
#   pip install -r requirements-prod.txt
#
# ═══════════════════════════════════════════════════════════════
