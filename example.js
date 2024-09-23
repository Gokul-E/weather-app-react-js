import { react, useEffect, useState } from "react";

function Add() {
  const [count, setCount] = useState(0);

    useEffect(()=>{
      if(count>10)
      setCount(1)
    },[count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={()=> setCount(count + 1)}>increase</button>
    </>
  );
}
export default Add;
