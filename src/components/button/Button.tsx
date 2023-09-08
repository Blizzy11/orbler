type Props = {
  color: string;
  text: string;
};

const Button = (props: Props) => {
  const { color, text } = props;
  return (
    <div>
      <div>
        <button style={{ backgroundColor: color }}>{text}</button>
      </div>
    </div>
  );
};

export default Button;
