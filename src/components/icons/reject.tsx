interface RejectIconProps { className: string }

export const RejectIcon: React.FC<RejectIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="800"
      height="800"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 64 64"
    >
      <path fill="none" d="M-256 -256H1024V544H-256z"></path>
      <g>
        <path d="M32.266 7.951c13.246 0 24 10.754 24 24s-10.754 24-24 24-24-10.754-24-24 10.754-24 24-24zM16.65 19.416a19.942 19.942 0 00-4.411 12.535c0 11.053 8.974 20.027 20.027 20.027 4.743 0 9.102-1.652 12.534-4.411L16.65 19.416zm31.048 25.295a19.941 19.941 0 004.596-12.76c0-11.054-8.974-20.028-20.028-20.028a19.941 19.941 0 00-12.76 4.596l28.192 28.192z"></path>
      </g>
    </svg>
  )
}