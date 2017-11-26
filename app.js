
function onReady(){
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++ // had this as id.value but doesn't seem to work
    });
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deletebutton = document.createElement('button');
      checkbox.type = "checkbox";
      deletebutton.textContent = "Delete";
      newLi.id = toDo.id;

      deletebutton.addEventListener('click', function(e) {
        // access the id of the parent (li) element we want to remove
         var idToRemove = this.parentElement.id;
         //console.log('idToRemove: ' + idToRemove);

         var filtered = toDos.filter((item) => item.id != idToRemove);
         //console.log(filtered);
         toDos = filtered;
        renderTheUI();
      });

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deletebutton); // append to newLi

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}


window.onload = function() {
  onReady();
};
