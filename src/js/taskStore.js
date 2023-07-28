export default function taskStorage() {
  const storage = { a: 1 }; // nanoid => task object
  let activeTaskId;

  function addTask(taskObj) { // taskObj built using Task constructor
    storage[taskObj.id] = taskObj;
  }

  function removeTask(id) {
    delete storage[id];
  }

  function getTask(id) {
    if (!storage[id]) return false;
    return storage[id];
  }

  function printStorage() {
    console.log(storage);
  }

  function setActiveTask(id) {
    activeTaskId = id;
  }

  function getActiveTask() {
    return storage[activeTaskId];
  }

  return {
    addTask, removeTask, getTask, printStorage, setActiveTask, getActiveTask,
  };
}
