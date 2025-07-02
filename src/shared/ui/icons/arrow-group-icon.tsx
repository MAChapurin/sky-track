import type { FC, SVGProps } from 'react'

export const ArrowGroupIcon: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      className="-mr-1 ml-2 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
      />
    </svg>
  )
}
