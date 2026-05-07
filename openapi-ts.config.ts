import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://effectiveai-staging.app/api/v1/swagger-v1.json',
  output: {
    path: './src/api-client',
    format: 'prettier',
  },
  plugins: ['@hey-api/client-fetch', '@hey-api/sdk', '@hey-api/typescript'],
});
