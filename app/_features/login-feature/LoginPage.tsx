import { ImageContainer } from "./ImageContainer";
import { LoginInputs } from "./LoginInputs";

function LoginPage() {
  return (
    <div className="grid grid-cols-[1.5fr_1fr]">
      <ImageContainer />
      <LoginInputs />
    </div>
  );
}

export default LoginPage;
