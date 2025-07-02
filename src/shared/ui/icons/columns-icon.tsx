import type { FC, SVGProps } from 'react'

export const ColumnsIcon: FC<SVGProps<SVGSVGElement>> = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 6l5.5 0" />
			<path d="M4 10l5.5 0" />
			<path d="M4 14l5.5 0" />
			<path d="M4 18l5.5 0" />
			<path d="M14.5 6l5.5 0" />
			<path d="M14.5 10l5.5 0" />
			<path d="M14.5 14l5.5 0" />
			<path d="M14.5 18l5.5 0" />
		</svg>
	)
}
