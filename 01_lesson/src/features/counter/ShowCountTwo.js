import React from "react";
import { useSelector } from "react-redux";

export default function ShowCountTwo() {
  const countTwo = useSelector((state) => state.test.countTwo);
  return <p>{countTwo}</p>;
}
