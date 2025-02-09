import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export default function PostAuthor(props) {
  const { userId } = props;
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown Author"}</span>;
}
