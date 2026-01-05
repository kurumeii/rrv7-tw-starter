import '../app/app.css'
import type { GlobalProvider } from "@ladle/react"

export const Provider: GlobalProvider = ({ children }) => (
	<div className='items-center-safe justify-center-safe flex flex-col gap-4'>
		{children}
	</div>
)
