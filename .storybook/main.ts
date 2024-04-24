import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-themes',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: [{ from: '../public', to: '/public' }],
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config) => {
		const imageRule = config.module?.rules?.find((rule) => {
			const test = (rule as { test: RegExp }).test

			if (!test) {
				return false
			}

			return test.test('.svg')
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		}) as { [key: string]: any }

		imageRule.exclude = /\.svg$/

		config.module?.rules?.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}
export default config
