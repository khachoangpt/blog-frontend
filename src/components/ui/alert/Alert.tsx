import { type VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import {
  alertDescriptionVariants,
  alertTitleVariants,
  alertVariants,
} from './variants'

const Alert = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5 ref={ref} className={cn(alertTitleVariants(), className)} {...props}>
    {children}
  </h5>
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertDescriptionVariants(), className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
