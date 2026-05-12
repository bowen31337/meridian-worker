# Meridian Worker

A Cloudflare Workers serverless function for the Meridian project.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Run locally:
```bash
npm run dev
```

## Deployment

Deploy to Cloudflare:
```bash
npm run deploy
```

Ensure you have authenticated with `wrangler login` first.

## Endpoints

- `GET /` - Root endpoint, returns service info
- `GET /health` - Health check
- `GET /api/hello?name=YourName` - Example API endpoint

## Configuration

Edit `wrangler.toml` to configure:
- `account_id` - Your Cloudflare account ID
- `route` - Custom route pattern
- `zone_id` - Your domain zone ID
