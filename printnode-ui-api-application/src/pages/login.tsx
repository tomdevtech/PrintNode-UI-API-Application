import Button from "../assets/components/button";
import InputField from "../assets/components/inputfield";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <h3>Username</h3>
      <InputField value="" onChange={(value) => console.log(value)} />
      <h3>API-Key</h3>
      <InputField value="" onChange={(value) => console.log(value)} />
      <Button title="Login" Request="Login Request" />
    </div>
  );
}
