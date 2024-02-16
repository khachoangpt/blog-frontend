import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Box = ({
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
  return <span {...rest}>{children}</span>
}
