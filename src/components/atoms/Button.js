// Libs/styles
import "./Button.scss";

const Button = (props) => {
  let styles = props.size ? "btn " + props.size : "btn";
  styles += props.type ? " " + props.type : "";

  return (
    <button onClick={props.onClick} className={styles}>
      {props.children}
    </button>
  );
};

export default Button;
