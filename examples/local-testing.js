/**
 * Example: Local Testing of Meridian Worker
 * 
 * Run with: node examples/local-testing.js
 */

import { route } from '../src/router.js';

async function testEndpoint(path) {
  const request = new Request(`http://localhost:8787${path}`);
  const response = await route(request);
  const body = await response.json();
  console.log(`\n${path}`);
  console.log('Status:', response.status);
  console.log('Response:', JSON.stringify(body, null, 2));
}

async function main() {
  console.log('Testing Meridian Worker Endpoints\n');

  await testEndpoint('/');
  await testEndpoint('/health');
  await testEndpoint('/api/hello');
  await testEndpoint('/api/hello?name=Bowen');
  await testEndpoint('/nonexistent');

  console.log('\n✅ All endpoints tested');
}

main().catch(console.error);
