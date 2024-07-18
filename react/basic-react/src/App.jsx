import React from "react";
import DataList from "./Data.json";
import List from "./List";

export default function App() {
  return (
    <div>
      {/* {DataList.map((ele) => {
        return (
          <Data
            key={ele.id}
            name={ele.name}
            username={ele.username}
            email={ele.email}
            address={ele.address}
          />
        );
      })} */}
      <List/>
    </div>
  );
}
