/**
 * API Handlers
 */

export async function handleHello(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';

  return new Response(JSON.stringify({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function handleNotFound(request) {
  return new Response(JSON.stringify({
    error: 'Not Found',
    path: new URL(request.url).pathname
  }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
}
