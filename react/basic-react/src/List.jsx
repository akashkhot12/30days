import React, { useState } from "react";
import DataList from "./Data.json";
export default function List() {
  const [nData, setnData] = useState(DataList);
  return (
    <div>
      <ul>
        {nData.map((items) => {
          <li key={items.id}>{items.id}</li>;
        })}
      </ul>
    </div>
  );
}
