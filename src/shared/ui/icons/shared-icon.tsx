import type { FC, SVGProps } from "react";

export const SharedIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.5 15.5C27.5 15.5 29 16.2654 30.242 17.5C32 19.2474 32 21.1399 32 24.57C32 28 32 29.652 30.242 31.326C28.484 33 25.6565 33 20 33H17C11.3435 33 8.5145 33 6.758 31.326C5.0015 29.652 5 28.1399 5 24.57C5 21 5.07363 19.1741 6.75781 17.5C8.442 15.8259 9.49995 15.5 12.5 15.5M18.5375 6.99996L18.5 24M18.5375 6.99996C18.2771 6.99664 18.0248 7.0902 17.8295 7.26246C16.4705 8.40996 14 11.3935 14 11.3935M18.5375 6.99996C18.7717 7.01379 18.9946 7.10568 19.1705 7.26096C20.5295 8.40996 23 11.395 23 11.395"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
