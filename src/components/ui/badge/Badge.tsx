import { type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { badgeVariants } from './variants'

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
