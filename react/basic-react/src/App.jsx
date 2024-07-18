import React from "react";
import Data from "./Data";
import DataList from "./Data.json";

export default function App() {
  return (
    <div>

      {
        DataList.map((ele) => {
          return <Data key={ele.id}
            name={ele.name}
            username={ele.username}
            email={ele.email}
            address={ele.address.street}
          />
        })
      }
    </div>
  );
}
