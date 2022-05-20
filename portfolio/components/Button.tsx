import button from "../styles/button.module.scss";
type ButtonProps = {
  text: string;
};
const Button = ({ text }: ButtonProps) => {
  return (
    <div className={button.button}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
