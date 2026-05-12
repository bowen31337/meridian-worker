/**
 * Health Check Handler
 */

export async function handleHealth(request) {
  return new Response(JSON.stringify({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
