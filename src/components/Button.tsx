interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="bg-purple tracking-wider py-2 px-6 font-semibold"
    >
      {text}
    </button>
  );
};

export default Button;
