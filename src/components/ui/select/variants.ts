import { cva } from 'class-variance-authority'

export const selectVariants = cva([
  'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2',
  'text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2',
  'focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
])

export const selectItemVariants = cva([
  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
  'focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
])
