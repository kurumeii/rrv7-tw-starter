import { type ClassNameValue, twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

export function cx(...inputs: Array<ClassNameValue>) {
	return twMerge(...inputs)
}

export { tv }
export type { VariantProps } from "tailwind-variants"
