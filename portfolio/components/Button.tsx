import { BsArrowRight } from "react-icons/bs";

import button from "../styles/button.module.scss";
type ButtonProps = {
  text: string;
  external: boolean;
};

const Button = ({ text, external }: ButtonProps) => {
  return (
    <div className={button.button}>
      <p>
        {text} {external ? <BsArrowRight /> : null}
      </p>
    </div>
  );
};

export default Button;
