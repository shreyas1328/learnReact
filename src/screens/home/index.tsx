import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { decrement, increment } from "../../redux/slice/counterSlice";
import { logout } from "../../redux/slice/loginSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const onIncrement = (): void => {
    dispatch(increment());
  };

  const onDecrement = (): void => {
    dispatch(decrement());
  };

  const onLogout = (): void => {
    dispatch(logout());
  };

  const onAbout = (): void => {
    navigation("/about");
  };

  const onLang = (): void => {
    navigation("/lang");
  };

  return (
      <div>
          <b>Home</b>
      <br />
      <br />
      <br />
      <br />
      <div>{counter.value}</div>
      <br />
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={onAbout}>About</button>
      <button onClick={onLang}>Lang check</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
