import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Notes from "./Notes";
import Reg from "./Reg";
function App() {
  // var title = "default title";
  // function handleSubmit() {
  //   title = "changed title";
  //   console.log(title);
  // }
  const [title, setTitle] = useState("default title");
  function handleChange(e) {
    setTitle(e.target.value);
  }
  // function handleSubmit() {
  //   setTitle("changed title");
  // }
  return (
    <>
      <p>{title}</p>
      {/* <button onClick={handleSubmit}>change it</button> */}
      <input placeholder="enter title" onChange={handleChange} />
    </>
  );
}

export default App;
