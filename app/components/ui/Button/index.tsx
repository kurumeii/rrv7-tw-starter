import { cx, tv, type VariantProps } from "configs/ui.config"
import type { ComponentProps, ReactNode, Ref } from "react"
import * as RAC from "react-aria-components"
import { focusButtonStyles, Loader } from "ui"

const buttonStyles = tv({
	extend: focusButtonStyles,
	base: [
		"relative box-border inline-flex items-center justify-center gap-2 whitespace-nowrap text-pretty",
		"pressed:scale-95 cursor-pointer select-none disabled:pointer-events-none disabled:cursor-default disabled:opacity-50",
		"*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0",
		"transition duration-300 ease-in-out",
	],
	variants: {
		colors: {
			primary: "bg-primary text-primary-foreground hover:bg-primary/80",
			secondary:
				"bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
			warning:
				"bg-warning text-warning-foreground hover:bg-warning/80 focus-visible:ring-warning",
			success:
				"bg-success text-success-foreground hover:bg-success/80 focus-visible:ring-success",
			error:
				"bg-error text-error-foreground hover:bg-error/80 focus-visible:ring-error",
		},
		variants: {
			solid: "",
			outline: "border border-input bg-background text-inherit",
			ghost: "bg-background text-inherit",
		},
		size: {
			sm: "h-5 px-3 text-sm *:data-[slot=icon]:size-3",
			md: "h-8 px-4",
			lg: "h-10 px-8 text-lg *:data-[slot=icon]:size-6",
			xl: "h-12 px-10 text-xl *:data-[slot=icon]:size-9",
		},
		radius: {
			sm: "rounded-sm",
			md: "rounded",
			lg: "rounded-lg",
			full: "rounded-full",
		},
		fullWidth: { true: "w-full" },
		isIcon: { true: "justify-center p-0" },
	},
	compoundVariants: [
		{
			isIcon: true,
			size: "sm",
			className: "size-5",
		},
		{
			isIcon: true,
			size: "md",
			className: "size-8",
		},
		{
			isIcon: true,
			size: "lg",
			className: "size-10",
		},
		{
			isIcon: true,
			size: "xl",
			className: "size-12",
		},
		{
			variants: "outline",
			colors: "primary",
			className:
				"border-primary hover:bg-primary hover:text-primary-foreground",
		},
		{
			variants: "outline",
			colors: "secondary",
			className: "hover:bg-secondary hover:text-secondary-foreground",
		},
		{
			variants: "outline",
			colors: "warning",
			className:
				"border-warning hover:bg-warning hover:text-warning-foreground",
		},
		{
			variants: "outline",
			colors: "success",
			className:
				"border-success hover:bg-success hover:text-success-foreground",
		},
		{
			variants: "outline",
			colors: "error",
			className: "border-error hover:bg-error hover:text-error-foreground",
		},
		{
			variants: "ghost",
			colors: "primary",
			className: "text-primary hover:bg-primary hover:text-primary-foreground",
		},
		{
			variants: "ghost",
			colors: "secondary",
			className: "hover:bg-secondary hover:text-secondary-foreground",
		},
		{
			variants: "ghost",
			colors: "warning",
			className: "text-warning hover:bg-warning hover:text-warning-foreground",
		},
		{
			variants: "ghost",
			colors: "success",
			className: "text-success hover:bg-success hover:text-success-foreground",
		},
		{
			variants: "ghost",
			colors: "error",
			className: "text-error hover:bg-error hover:text-error-foreground",
		},
	],
	defaultVariants: {
		colors: "primary",
		variants: "solid",
		size: "md",
		radius: "md",
		fullWidth: false,
	},
})

interface ButtonProps
	extends ComponentProps<typeof RAC.Button>,
		VariantProps<typeof buttonStyles> {
	ref?: Ref<HTMLButtonElement>
	leftIcon?: ReactNode
	rightIcon?: ReactNode
}

const Button = (props: ButtonProps) => {
	const {
		variants,
		colors,
		className,
		size,
		radius,
		isDisabled,
		fullWidth,
		isIcon,
		leftIcon,
		rightIcon,
		...rest
	} = props
	return (
		<RAC.Button
			{...rest}
			className={RAC.composeRenderProps(className, (cls, renderProps) =>
				buttonStyles({
					...renderProps,
					variants,
					colors,
					radius,
					size,
					fullWidth,
					isIcon,
					className: cx(
						cls,
						leftIcon && "justify-between",
						rightIcon && "justify-between"
					),
				})
			)}
		>
			{(value) => (
				<>
					{leftIcon && !rest.isPending ? (
						<span slot='icon'>{leftIcon}</span>
					) : null}
					{typeof rest.children === "function"
						? rest.children(value)
						: rest.children}
					{rightIcon && !rest.isPending ? (
						<span slot='icon'>{rightIcon}</span>
					) : null}
					{rest.isPending ? (
						<Loader className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
					) : null}
				</>
			)}
		</RAC.Button>
	)
}

export { buttonStyles, type ButtonProps, Button }
