# Meridian Worker Architecture

## Serverless Design

```
Request → Cloudflare Edge → Router → Handler → Response
           ↓
        Cache Layer
```

## Core Components

### 1. Request Router
Routes incoming requests to appropriate handlers based on path and method.

```javascript
GET  /           → Service info
GET  /health     → Health check
GET  /api/*      → API endpoints
```

### 2. Handlers
Modular request handlers for different endpoints and operations.

- Health checks
- API routing
- Error handling
- Response formatting

### 3. Middleware
- Authentication (if needed)
- Request logging
- Error handling
- Response compression

### 4. Integration Layer
- Meridian agent invocation
- Memory store access
- Tool execution
- Message routing

## Environment Configuration

```toml
[env.production]
vars = { ENVIRONMENT = "production", API_KEY = "..." }

[env.staging]
vars = { ENVIRONMENT = "staging", API_KEY = "..." }
```

## Deployment Pipeline

1. Code commit to GitHub
2. GitHub Actions CI runs
3. Tests pass
4. Deploy to Cloudflare Workers via `wrangler publish`
5. Production verified

## Performance Optimization

- Edge caching for static content
- Request batching for API calls
- Gzip compression enabled
- Minimal dependencies for fast startup
