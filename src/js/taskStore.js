import pubSub from '../utils/pubSub';

export default function taskStorage() {
  const storage = { }; // nanoid => task object
  const listStorage = {}; // listName => count (to get, e.g. "name(1)", "name(2)")
  let activeTaskId;

  // Method declaration
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

  function printStorage() { // For debugging and development
    console.log(storage);
  }

  function printListStorage() {
    console.log(listStorage);
  }

  function setActiveTask(id) {
    activeTaskId = id;
  }

  function getActiveTask() {
    return storage[activeTaskId];
  }

  function exposeStorageForUpdateCount() {
    pubSub.publish('update_count_processed', storage);
  }

  function exposeStorageForUpdateCardShelf(selectorObj) {
    pubSub.publish('update_cardShelf_processed', [selectorObj, storage]);
  }

  return {
    addTask,
    removeTask,
    getTask,
    printStorage,
    printListStorage,
    setActiveTask,
    getActiveTask,
    exposeStorageForUpdateCount,
    exposeStorageForUpdateCardShelf,
  };
}
