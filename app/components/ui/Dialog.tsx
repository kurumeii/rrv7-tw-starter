import { RiCloseLine } from "@remixicon/react"
import { cx, tv, type VariantProps } from "configs/ui.config"
import * as RAC from "react-aria-components"

const sheetVariants = tv({
	base: [
		"fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out",
		"entering:animate-in entering:duration-500",
		"exiting:animate-out exiting:duration-300",
	],
	variants: {
		side: {
			top: "entering:slide-in-from-top exiting:slide-out-to-top inset-x-0 top-0 border-b",
			bottom:
				"entering:slide-in-from-bottom exiting:slide-out-to-bottom inset-x-0 bottom-0 border-t",
			left: "entering:slide-in-from-left exiting:slide-out-to-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
			right:
				"entering:slide-in-from-right exiting:slide-out-to-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
		},
	},
})
const Dialog = RAC.Dialog
const DialogTrigger = RAC.DialogTrigger
const DialogOverlay = ({ className, ...props }: RAC.ModalOverlayProps) => (
	<RAC.ModalOverlay
		{...props}
		className={RAC.composeRenderProps(className, (className) =>
			cx(
				"fixed inset-0 z-50 bg-black/80",
				/* Exiting */
				"exiting:fade-out-0 exiting:animate-out exiting:duration-300",
				/* Entering */
				"entering:fade-in-0 entering:animate-in",
				className
			)
		)}
	/>
)

interface DialogContentProps
	extends Omit<React.ComponentProps<typeof RAC.Modal>, "children">,
		VariantProps<typeof sheetVariants> {
	children?: RAC.DialogProps["children"]
	role?: RAC.DialogProps["role"]
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
	<RAC.Modal
		className={RAC.composeRenderProps(className, (className) =>
			cx(
				side
					? sheetVariants({ side, className: "h-full p-6" })
					: "entering:fade-in-0 exiting:fade-out-0 entering:zoom-in-95 exiting:zoom-out-95 entering:slide-in-from-left-1/2 entering:slide-in-from-top-[48%] exiting:slide-out-to-left-1/2 exiting:slide-out-to-top-[48%] fixed top-1/2 left-[50vw] z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 entering:animate-in exiting:animate-out border bg-background p-6 shadow-lg duration-200 exiting:duration-300 sm:rounded-lg md:w-full",
				className
			)
		)}
		{...props}
	>
		<RAC.Dialog
			role={role}
			className={cx(!side && "grid h-full gap-4", "h-full outline-none")}
		>
			{RAC.composeRenderProps(children, (children, renderProps) => (
				<>
					{children}
					{closeButton && (
						<RAC.Button
							onPress={renderProps.close}
							className={cx(
								"absolute size-4 rounded-sm opacity-70 ring-offset-background transition-opacity",
								"entering:bg-accent entering:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
							)}
						>
							<RiCloseLine />
							<span className='sr-only'>Close</span>
						</RAC.Button>
					)}
				</>
			))}
		</RAC.Dialog>
	</RAC.Modal>
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

const DialogTitle = ({ className, ...props }: RAC.HeadingProps) => (
	<RAC.Heading
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
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogTitle,
	DialogTrigger,
}
export type { DialogContentProps }
