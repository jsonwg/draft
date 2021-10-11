import "./Button.css";

const Button = ({ action, text, size }) => {
  return (
    <button onClick={action} className="btn" style={{ fontSize: size + "vh" }}>
      {text}
    </button>
  );
};

export default Button;
