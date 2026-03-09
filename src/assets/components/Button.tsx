
interface ButtonProps {
    text: string;
    styles?: string;
    onClick: () => void;
}

export const Button = ({ text, styles='', onClick }: ButtonProps) => {
  return (
    <button className={`bg-linear-to-b from-Teal-200 to-Cyan-500 rounded-3xl h-12 ${styles} hover:to-Teal-200 cursor-pointer hover:text-Navy-950`} onClick={onClick}>
      {text}
    </button>
  )
}