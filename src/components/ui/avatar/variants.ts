import { cva } from 'class-variance-authority'

export const avatarVariants = cva('relative flex shrink-0 overflow-hidden', {
  variants: {
    size: {
      large: 'h-12 w-12',
      medium: 'h-10 w-10',
      small: 'h-8 w-8',
    },
    radius: {
      full: 'rounded-full',
      none: 'rounded-none',
    },
  },
  defaultVariants: {
    size: 'medium',
    radius: 'full',
  },
})

export const avatarImageVariants = cva('aspect-square h-full w-full')

export const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center rounded-full bg-muted',
  {
    variants: {
      radius: {
        full: 'rounded-full',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      radius: 'full',
    },
  },
)
