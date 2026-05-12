# Contributing to Meridian Worker

## Development Setup

```bash
git clone https://github.com/bowen31337/meridian-worker.git
cd meridian-worker
npm install
npm run dev
```

## Local Testing

```bash
npm run dev
# Opens http://localhost:8787
```

## Deployment

### Staging
```bash
wrangler deploy --env staging
```

### Production
```bash
wrangler deploy --env production
```

## Code Guidelines

- ES modules (type: "module" in package.json)
- Minimal dependencies for edge performance
- Error handling for all async operations
- Comprehensive comments for complex logic

## Testing

```bash
npm run test              # Run all tests
npm run test:watch       # Watch mode
```

## PR Requirements

- [ ] Tests added
- [ ] Tested locally with `npm run dev`
- [ ] No new dependencies without justification
- [ ] Conventional commit messages

## Adding Endpoints

1. Create handler in `src/handlers/`
2. Register in router
3. Add tests in `tests/`
4. Update README.md with endpoint docs
5. Submit PR

## Cloudflare Configuration

Edit `wrangler.toml` to:
- Change account_id (get from `wrangler whoami`)
- Set custom domain via `route` field
- Configure environment variables
