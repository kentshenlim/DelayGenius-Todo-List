const tDList = (() => {
  const toDoList = []; // [{name:task1}, {name:task2}]

  // Method declaration
  function exposeToDoLists() {
    console.log(toDoList);
  }

  function addNewTask(taskObj) {
    toDoList.push(taskObj);
  }

  return { toDoList, exposeToDoLists, addNewTask };
})();

export default tDList;
