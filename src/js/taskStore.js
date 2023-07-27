export default function taskStorage() {
  const storage = { a: 1 }; // nanoid => task object

  function addTask(taskObj) { // taskObj built using Task constructor
    storage[taskObj.id] = taskObj;
  }

  function removeTask(id) {
    delete storage[id];
  }

  function getTask(id) {
    if (storage[id]) return false;
    return storage[id];
  }

  function toggleTaskImportant(id) {
    storage[id].isImportant = !storage[id].isImportant;
  }

  function printStorage() {
    console.log(storage);
  }

  return {
    addTask, removeTask, getTask, toggleTaskImportant, printStorage,
  };
}
