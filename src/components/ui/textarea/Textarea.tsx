import { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { textareaVariants } from './variants'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps & VariantProps<typeof textareaVariants>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(textareaVariants(), className)}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
