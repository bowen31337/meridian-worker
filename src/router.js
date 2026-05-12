/**
 * Request Router
 */

import { handleHealth } from './handlers/health.js';
import { handleHello, handleNotFound } from './handlers/api.js';

export async function route(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Health check
  if (pathname === '/health') {
    return handleHealth(request);
  }

  // Root endpoint
  if (pathname === '/' || pathname === '') {
    return new Response(JSON.stringify({
      message: 'Meridian Worker',
      version: '0.1.0',
      endpoints: {
        '/health': 'Health check',
        '/api/hello': 'Example hello endpoint'
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // API endpoints
  if (pathname === '/api/hello') {
    return handleHello(request);
  }

  // 404
  return handleNotFound(request);
}
