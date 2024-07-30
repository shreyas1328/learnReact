import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/reduxHooks";
import { customLoginAction } from "../../redux/slice/loginSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const onLogin = (): void => {
    dispatch(customLoginAction(true));
    navigation("/");
  };

  return (
    <div>
      <b>Login</b>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={onLogin}>Login</button>
      <br />
    </div>
  );
}
