import { RiCloseLine } from "@remixicon/react"
import { cva, cx, type VariantProps } from "configs/cva.config"
import {
	Button as AriaButton,
	Dialog as AriaDialog,
	type DialogProps as AriaDialogProps,
	DialogTrigger as AriaDialogTrigger,
	Heading as AriaHeading,
	type HeadingProps as AriaHeadingProps,
	Modal as AriaModal,
	ModalOverlay as AriaModalOverlay,
	type ModalOverlayProps as AriaModalOverlayProps,
	composeRenderProps,
} from "react-aria-components"

const sheetVariants = cva({
	base: [
		"fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out",
		"rac-entering:animate-in rac-entering:duration-500",
		"rac-exiting:animate-out rac-exiting:duration-300",
	],
	variants: {
		side: {
			top: "rac-entering:slide-in-from-top rac-exiting:slide-out-to-top inset-x-0 top-0 border-b",
			bottom:
				"rac-entering:slide-in-from-bottom rac-exiting:slide-out-to-bottom inset-x-0 bottom-0 border-t",
			left: "rac-entering:slide-in-from-left rac-exiting:slide-out-to-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
			right:
				"rac-entering:slide-in-from-right rac-exiting:slide-out-to-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
		},
	},
})
const Dialog = AriaDialog
const DialogTrigger = AriaDialogTrigger
const DialogOverlay = ({ className, ...props }: AriaModalOverlayProps) => (
	<AriaModalOverlay
		{...props}
		className={composeRenderProps(className, (className) =>
			cx(
				"fixed inset-0 z-50 bg-black/80",
				/* Exiting */
				"rac-exiting:fade-out-0 rac-exiting:animate-out rac-exiting:duration-300",
				/* Entering */
				"rac-entering:fade-in-0 rac-entering:animate-in",
				className
			)
		)}
	/>
)

interface DialogContentProps
	extends Omit<React.ComponentProps<typeof AriaModal>, "children">,
		VariantProps<typeof sheetVariants> {
	children?: AriaDialogProps["children"]
	role?: AriaDialogProps["role"]
	closeButton?: boolean
}

const DialogContent = ({
	className,
	children,
	side,
	role,
	closeButton = true,
	...props
}: DialogContentProps) => (
	<AriaModal
		className={composeRenderProps(className, (className) =>
			cx(
				side
					? sheetVariants({ side, className: "h-full p-6" })
					: "rac-entering:fade-in-0 rac-exiting:fade-out-0 rac-entering:zoom-in-95 rac-exiting:zoom-out-95 rac-entering:slide-in-from-left-1/2 rac-entering:slide-in-from-top-[48%] rac-exiting:slide-out-to-left-1/2 rac-exiting:slide-out-to-top-[48%] fixed top-1/2 left-[50vw] z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rac-entering:animate-in rac-exiting:animate-out border bg-background p-6 shadow-lg duration-200 rac-exiting:duration-300 sm:rounded-lg md:w-full",
				className
			)
		)}
		{...props}
	>
		<AriaDialog
			role={role}
			className={cx(!side && "grid h-full gap-4", "h-full outline-none")}
		>
			{composeRenderProps(children, (children, renderProps) => (
				<>
					{children}
					{closeButton && (
						<AriaButton
							onPress={renderProps.close}
							className='absolute top-4 right-4 rounded-sm rac-entering:bg-accent rac-entering:text-muted-foreground opacity-70 ring-offset-background transition-opacity data-[disabled]:pointer-events-none data-[hovered]:opacity-100 data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2'
						>
							<RiCloseLine />
							<span className='sr-only'>Close</span>
						</AriaButton>
					)}
				</>
			))}
		</AriaDialog>
	</AriaModal>
)

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			"flex flex-col space-y-1.5 text-center sm:text-left",
			className
		)}
		{...props}
	/>
)

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className
		)}
		{...props}
	/>
)

const DialogTitle = ({ className, ...props }: AriaHeadingProps) => (
	<AriaHeading
		slot='title'
		className={cx(
			"font-semibold text-lg leading-none tracking-tight",
			className
		)}
		{...props}
	/>
)

const DialogDescription = ({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
	<p
		className={cx(
			"flex flex-col space-y-1.5 text-center sm:text-left",
			className
		)}
		{...props}
	/>
)

export {
	Dialog,
	DialogOverlay,
	DialogTrigger,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogFooter,
	DialogTitle,
}
export type { DialogContentProps }
