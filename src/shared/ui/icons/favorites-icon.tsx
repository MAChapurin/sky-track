import type { FC, SVGProps } from 'react'

export const FavoritesIcon: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      aria-hidden={true}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.875 0C12.231 0.0520888 10.6777 0.77861 9.56899 2.01405C8.4603 0.77861 6.90699 0.0520888 5.26295 0C2.3563 0 0 2.39588 0 5.35135C0 9.16541 4.54527 13.3784 6.6983 15.5676L8.88003 17.7859C9.01449 17.9228 9.19691 17.9998 9.38718 18H9.7508C9.94108 17.9998 10.1235 17.9228 10.258 17.7859L12.4397 15.5676C14.5927 13.3784 19.138 9.16541 19.138 5.35135C19.138 2.39588 16.7817 0 13.875 0Z"
        fill="currentColor"
      />
    </svg>
  )
}
