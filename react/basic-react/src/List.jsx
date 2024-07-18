import React, { useState } from "react";
import DataList from "./Data.json";
export default function List() {
  const [nData, setnData] = useState(DataList);

  const handleRemove = (itemsId) => {
    setnData(nData.filter(item => item.id!==itemsId))
  };

  const handleUpdate = (itemsId) => {
    setnData(nData.map(item=>{
      if(item.id === itemsId){
        return{name:"Akash Khot"}
      }
      else{
        return item;
      }
    }))
  };
  return (
    <div>
      <ol>
        {nData.map((items) => (
          <li key={items.id}>
            Name = {items.name} <br />
            <span>Address = {items.address}</span>
            <br />
            <br />
            <button onClick={()=>handleUpdate(items.id)}>Update</button>
            <button onClick={()=>handleRemove(items.id)}>Delete</button>
            <br />
            <br />
          </li>
        ))}
        <button onClick={() => setnData([])}>Clear</button>
      </ol>
    </div>
  );
}
