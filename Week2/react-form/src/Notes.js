import { useState } from "react";

function Notes() {
  const [title, SetTile] = useState("cvr");
  function submit(e) {
    e.preventDefault();
    console.log("hello");
  }
  function changeListener(e) {
    e.preventDefault();
    SetTile("title changed");
  }
  return (
    <form>
      <p>{title}</p>
      <button onClick={changeListener}>submit</button>
    </form>
  );
}

export default Notes;
