"use client"
import { RiCloseLine } from "@remixicon/react"
import type { CSSProperties } from "react"
import {
	Button,
	Text,
	UNSTABLE_Toast as Toast,
	UNSTABLE_ToastContent as ToastContent,
	type ToastProps,
	UNSTABLE_ToastQueue as ToastQueue,
	UNSTABLE_ToastRegion as ToastRegion,
} from "react-aria-components"
import { flushSync } from "react-dom"
import { composeTwRenderProps } from "ui"

// Define the type for your toast content. This interface defines the properties of your toast content, affecting what you
// pass to the queue calls as arguments.
interface MyToastContent {
	title: string
	description?: string
}

// This is a global toast queue, to be imported and called where ever you want to queue a toast via queue.add().
export const queue = new ToastQueue<MyToastContent>({
	// Wrap state updates in a CSS view transition.
	wrapUpdate(fn) {
		if ("startViewTransition" in document) {
			document.startViewTransition(() => {
				flushSync(fn)
			})
		} else {
			fn()
		}
	},
})

export function MyToastRegion() {
	return (
		// The ToastRegion should be rendered at the root of your app.
		<ToastRegion
			queue={queue}
			className='fixed right-4 bottom-4 flex flex-col-reverse gap-2 rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-solid focus-visible:outline-offset-2'
		>
			{({ toast }) => (
				<MyToast toast={toast}>
					<ToastContent className='flex min-w-0 flex-1 flex-col'>
						<Text
							slot='title'
							className='font-semibold text-primary-foreground text-sm'
						>
							{toast.content.title}
						</Text>
						{toast.content.description && (
							<Text
								slot='description'
								className='text-primary-foreground text-xs opacity-90'
							>
								{toast.content.description}
							</Text>
						)}
					</ToastContent>
					<Button
						slot='close'
						aria-label='Close'
						className='flex h-8 w-8 flex-none appearance-none items-center justify-center rounded-sm border-none bg-transparent pressed:bg-primary-foreground/15 p-0 text-primary-foreground outline-none [-webkit-tap-highlight-color:transparent] hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-solid focus-visible:outline-offset-2'
					>
						<RiCloseLine className='h-4 w-4' />
					</Button>
				</MyToast>
			)}
		</ToastRegion>
	)
}

export function MyToast(props: ToastProps<MyToastContent>) {
	return (
		<Toast
			{...props}
			style={{ viewTransitionName: props.toast.key } as CSSProperties}
			className={composeTwRenderProps(
				props.className,
				"flex w-57.5 items-center gap-4 rounded-lg bg-primary px-4 py-3 font-sans outline-none [view-transition-class:toast] focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-solid focus-visible:outline-offset-2 forced-colors:outline"
			)}
		/>
	)
}
