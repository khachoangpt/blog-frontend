import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
	format: 'biome',
	lint: 'biome',
	input: '../blog-backend/docs/next-spec.customer.json',
	output: 'client-sdk/backend',
	client: 'fetch',
	request: './client-sdk/request/index.ts',
	enums: 'typescript',
})
