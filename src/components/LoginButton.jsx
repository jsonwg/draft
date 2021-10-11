import Button from "./Button.jsx";

const login = () => {
  alert("Placeholder for actual authentication");
};

function LoginButton() {
  return <Button action={login} text="Login" size="3" />;
}

export default LoginButton;
