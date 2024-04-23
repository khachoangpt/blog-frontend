import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
	format: 'biome',
	lint: 'biome',
	input: '../blog-backend/docs/next-spec.customer.json',
	output: 'src/client-sdk/backend',
	client: 'fetch',
	request: 'src/client-sdk/request/index.ts',
	enums: 'typescript',
})
