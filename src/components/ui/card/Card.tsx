import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { type HTMLAttributes, forwardRef } from 'react'
import { Container } from '../container'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import {
	cardContentVariants,
	cardDescriptionVariants,
	cardFooterVariants,
	cardHeaderVariants,
	cardTitleVariants,
	cardVariants,
} from './variants'

const Card = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, ...props }, ref) => (
	<Container ref={ref} className={cn(cardVariants(), className)} {...props} />
))
Card.displayName = 'Card'

const CardHeader = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardHeaderVariants>
>(({ className, ...props }, ref) => (
	<Container
		ref={ref}
		className={cn(cardHeaderVariants(), className)}
		{...props}
	/>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof cardTitleVariants>
>(({ className, ...props }, ref) => (
	<Heading
		level={3}
		ref={ref}
		className={cn(cardTitleVariants(), className)}
		{...props}
	/>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement> &
		VariantProps<typeof cardDescriptionVariants>
>(({ className, ...props }, ref) => (
	<Paragraph
		ref={ref}
		className={cn(cardDescriptionVariants(), className)}
		{...props}
	/>
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardContentVariants>
>(({ className, ...props }, ref) => (
	<Container
		ref={ref}
		className={cn(cardContentVariants(), className)}
		{...props}
	/>
))
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardFooterVariants>
>(({ className, ...props }, ref) => (
	<Container
		ref={ref}
		className={cn(cardFooterVariants(), className)}
		{...props}
	/>
))
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
