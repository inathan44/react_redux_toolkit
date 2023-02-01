import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByTwo } from "./testSlice";
import ShowCountTwo from "./ShowCountTwo";

export default function AddTwo() {
  const countTwo = useSelector((state) => state.test.countTwo);
  const dispatch = useDispatch();

  return (
    <div
      id="addTwo-Button"
      style={{ color: "red", display: "flex", justifyContent: "center" }}
    >
      <button onClick={() => dispatch(incrementByTwo())}>Add Two</button>
      <ShowCountTwo />
    </div>
  );
}
