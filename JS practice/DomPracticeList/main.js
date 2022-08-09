const inputField = document.querySelector("#item");
const addItemClicked = document.querySelector("#submit");
const ul = document.querySelector("#items");
const searchInput = document.querySelector("#filter");

addItemClicked.addEventListener("click", addItem);
// listening for a click on any item within the ul
ul.addEventListener("click", removeItem);
searchInput.addEventListener("keyup", filter);

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
    inputField.value = "";
  }
}

function removeItem(ev) {
  // this event fires off if anything inside ul is clicked.
  // we continue only if the remove button that contains class of delete is clicked
  if (ev.target.classList.contains("delete")) {
    // children of ul are the lis and current target is the button whose parent is the li itself
    ul.removeChild(ev.target.parentElement);
  }
}

function filter(ev) {
  // listener is on the search input field so that is the target and what you type in it is the value
  const searchingFor = ev.target.value.toLowerCase();
  // convert HTML collection into an array first
  const items = ul.getElementsByTagName("li");
  // iterates over the lis with every li passed as item
  Array.from(items).forEach(function (item) {
    // takes the current li's and goes to it's first Node not element to take the text inside li. first children/element is the button
    const currentLiText = item.firstChild.textContent;
    // the moment the text doesn't match search item letter by letter, it will return -1 and hide that li
    // else, show that li again so if someone backspace, that li should be visible again
    if (currentLiText.toLowerCase().indexOf(searchingFor) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
