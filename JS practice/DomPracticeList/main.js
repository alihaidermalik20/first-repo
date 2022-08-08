const inputField = document.querySelector("#item");
const addItemClicked = document.querySelector("#submit");
const ul = document.querySelector("#items");

addItemClicked.addEventListener("click", addItem);
// listening for a click on any item within the ul
ul.addEventListener("click", removeItem);

function addItem(ev) {
  ev.preventDefault();
  // takes the value from the input field
  const item = inputField.value;
  // doesn't add anything to the list if nothing is typed in and submit button is clicked
  if (item.length != 0) {
    const newItem = document.createElement("LI");
    newItem.classList = "list-group-item";
    // create text inside the new li
    newItem.appendChild(document.createTextNode(item));

    const removeBtn = document.createElement("button");
    removeBtn.classList = "btn btn-danger btn-sm float-right delete";
    removeBtn.appendChild(document.createTextNode("X"));
    // add this button to the new li
    newItem.appendChild(removeBtn);

    // display the new li under Items inside ul
    ul.appendChild(newItem);
  }
}

function removeItem(ev) {
  // this event fires off if anything inside ul is clicked.
  // we continue only if the remove button that contains class of delete is clicked
  if (ev.target.classList.contains("delete")) {
    ul.removeChild(ev.target.parentElement);
  }
}
