import { compose, cva, cx, type VariantProps } from "configs/cva.config"
import type { ReactNode, Ref } from "react"
import {
	Button as ButtonPrimitive,
	type ButtonProps as ButtonPrimitiveProps,
} from "react-aria-components"
import { Loader } from "./loader"
import { composeRenderProps, focusButtonStyles } from "./primitives"

const _buttonStyles = cva({
	base: [
		"relative box-border inline-flex items-center justify-center gap-2 whitespace-nowrap text-pretty",
		"rac-disabled:pointer-events-none rac-pressed:scale-95 cursor-pointer rac-disabled:cursor-default select-none rac-disabled:opacity-50",
		"*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0",
		"transition duration-300 ease-in-out",
	],
	variants: {
		colors: {
			primary: "bg-primary text-primary-foreground hover:bg-primary/80",
			secondary:
				"bg-secondary text-secondary-foreground rac-focus-visible:ring-secondary hover:bg-secondary/80",
			warning:
				"bg-warning text-warning-foreground rac-focus-visible:ring-warning hover:bg-warning/80",
			success:
				"bg-success text-success-foreground rac-focus-visible:ring-success hover:bg-success/80",
			error:
				"bg-error text-error-foreground rac-focus-visible:ring-error hover:bg-error/80",
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
				"border-primary rac-hover:bg-primary rac-hover:text-primary-foreground",
		},
		{
			variants: "outline",
			colors: "secondary",
			className: "rac-hover:bg-secondary rac-hover:text-secondary-foreground",
		},
		{
			variants: "outline",
			colors: "warning",
			className:
				"border-warning rac-hover:bg-warning rac-hover:text-warning-foreground",
		},
		{
			variants: "outline",
			colors: "success",
			className:
				"border-success rac-hover:bg-success rac-hover:text-success-foreground",
		},
		{
			variants: "outline",
			colors: "error",
			className:
				"border-error rac-hover:bg-error rac-hover:text-error-foreground",
		},
		{
			variants: "ghost",
			colors: "primary",
			className:
				"rac-hover:bg-primary rac-hover:text-primary-foreground text-primary",
		},
		{
			variants: "ghost",
			colors: "secondary",
			className: "rac-hover:bg-secondary rac-hover:text-secondary-foreground",
		},
		{
			variants: "ghost",
			colors: "warning",
			className:
				"rac-hover:bg-warning rac-hover:text-warning-foreground text-warning",
		},
		{
			variants: "ghost",
			colors: "success",
			className:
				"rac-hover:bg-success rac-hover:text-success-foreground text-success",
		},
		{
			variants: "ghost",
			colors: "error",
			className:
				"rac-hover:bg-error rac-hover:text-error-foreground text-error",
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

const buttonStyles = compose(focusButtonStyles, _buttonStyles)

interface ButtonProps
	extends ButtonPrimitiveProps,
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
		<ButtonPrimitive
			{...rest}
			className={composeRenderProps(className, (cls, renderProps) =>
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
		</ButtonPrimitive>
	)
}

export { buttonStyles, type ButtonProps, Button }
