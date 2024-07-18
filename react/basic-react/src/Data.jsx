import React from "react";
import "./Data.css";

export default function Data(props) {
  // eslint-disable-next-line react/prop-types
  const { name, username, email, address } = props;
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="name">{name}</h2>
        <p className="username">{username}</p>
        <p className="email">{email}</p>
        <p className="address">{address}</p>
      </div>
    </div>
  );
}
