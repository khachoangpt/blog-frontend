'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { VariantProps } from 'class-variance-authority'
import { Check } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { checkboxVariants } from './variants'

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxVariants>
>(({ className, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ className, size }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className={cn(checkboxVariants({ size }))} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
