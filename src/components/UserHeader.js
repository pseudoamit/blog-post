import React from "react";
import { useSelector } from "react-redux";

const UserHeader = ({ userId }) => {
  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  if (!user) {
    return null;
  }
  return <div>{user.name}</div>;
};

export default UserHeader;
