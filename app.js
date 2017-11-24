
function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

   // create the To-Do list elements
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    let deletebutton = document.createElement('button');

     // modify elements
    deletebutton.textContent = "Delete";
    deletebutton.className = "delete";
    checkbox.type = "checkbox";
    checkbox.className = "check";
    newLi.textContent = title;
    //newLi.className = "add";


   // add the event listener to the delete button itself
   // rather than the li so that you can still click/unclick
   // the checkbox and not have to worry about listening to the
   // checkbox (with a change event)
    deletebutton.addEventListener('click', function (e) {
      var parent = this.parentElement;
      parent.removeChild(deletebutton);
      parent.removeChild(checkbox);
      toDoList.removeChild(parent);
    });

    // append elements
    newLi.appendChild(checkbox);
    newLi.appendChild(deletebutton);
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
