"use client"
import { RiErrorWarningLine, RiInformationLine } from "@remixicon/react"
import type { ReactNode } from "react"
import { chain } from "react-aria"
import { type DialogProps, Heading } from "react-aria-components"
import { Button } from "~/components/ui/Button"
import { Dialog } from "~/components/ui/Dialog"

interface AlertDialogProps extends Omit<DialogProps, "children"> {
	title: string
	children: ReactNode
	variant?: "info" | "destructive"
	actionLabel: string
	cancelLabel?: string
	onAction?: () => void
}

export function AlertDialog({
	title,
	variant,
	cancelLabel,
	actionLabel,
	onAction,
	children,
	...props
}: AlertDialogProps) {
	return (
		<Dialog role='alertdialog' {...props}>
			{({ close }) => (
				<>
					<Heading
						slot='title'
						className='my-0 font-semibold text-xl leading-6'
					>
						{title}
					</Heading>
					<div
						className={`absolute top-6 right-6 h-6 w-6 stroke-2 ${variant === "destructive" ? "text-red-500" : "text-blue-500"}`}
					>
						{variant === "destructive" ? (
							<RiErrorWarningLine aria-hidden />
						) : (
							<RiInformationLine aria-hidden />
						)}
					</div>
					<p className='mt-3 text-neutral-500 dark:text-neutral-400'>
						{children}
					</p>
					<div className='mt-6 flex justify-end gap-2'>
						<Button variants='outline' colors='secondary' onPress={close}>
							{cancelLabel || "Cancel"}
						</Button>
						<Button
							colors={variant === "destructive" ? "error" : "primary"}
							autoFocus
							onPress={chain(onAction, close)}
						>
							{actionLabel}
						</Button>
					</div>
				</>
			)}
		</Dialog>
	)
}
