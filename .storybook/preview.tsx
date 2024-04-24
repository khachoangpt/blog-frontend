import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from 'react'
import '../src/app/globals.css'
import { fontSans } from '../src/configs/font'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={fontSans.className}>
				<Story />
			</div>
		),
		withThemeByClassName({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
		}),
	],
}

export default preview
