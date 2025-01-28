console.log("hihih");
const notes = [];
function handleSubmit() {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;
  notes.push({
    title: title,
    description: desc,
  });
  console.log(notes);
}
