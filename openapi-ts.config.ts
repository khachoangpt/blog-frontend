import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
	input: '../blog-backend/docs/next-spec.customer.json',
	output: 'client-sdk/backend',
	client: 'fetch',
	request: './client-sdk/request/index.ts',
	enums: 'typescript',
})
