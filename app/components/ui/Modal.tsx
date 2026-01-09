"use client"
import {
	ModalOverlay,
	type ModalOverlayProps,
	Modal as RACModal,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const overlayStyles = tv({
	base: "absolute top-0 left-0 isolate z-20 h-(--page-height) w-full bg-black/[50%] text-center backdrop-blur-lg",
	variants: {
		isEntering: {
			true: "fade-in animate-in duration-200 ease-out",
		},
		isExiting: {
			true: "fade-out animate-out duration-200 ease-in",
		},
	},
})

const modalStyles = tv({
	base: "max-h-[calc(var(--visual-viewport-height)*.9)] w-full max-w-[min(90vw,450px)] rounded-2xl border border-border bg-background bg-clip-padding text-left align-middle font-sans text-foreground shadow-2xl dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas]",
	variants: {
		isEntering: {
			true: "zoom-in-105 animate-in duration-200 ease-out",
		},
		isExiting: {
			true: "zoom-out-95 animate-out duration-200 ease-in",
		},
	},
})

export function Modal(props: ModalOverlayProps) {
	return (
		<ModalOverlay {...props} className={overlayStyles}>
			<div className='sticky top-0 left-0 box-border flex h-(--visual-viewport-height) w-full items-center justify-center'>
				<RACModal {...props} className={modalStyles} />
			</div>
		</ModalOverlay>
	)
}
