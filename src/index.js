/**
 * Meridian Worker - Cloudflare Workers serverless function
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Health check endpoint
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Root endpoint
    if (url.pathname === '/') {
      return new Response(JSON.stringify({
        message: 'Meridian Worker',
        version: '0.1.0',
        endpoints: {
          '/health': 'Health check',
          '/api/hello': 'Example API endpoint'
        }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Example API endpoint
    if (url.pathname === '/api/hello') {
      const name = url.searchParams.get('name') || 'World';
      return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 404
    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
