import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Container = ({
	children,
	...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return <div {...rest}>{children}</div>
}
