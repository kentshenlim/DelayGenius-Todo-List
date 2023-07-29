import pubSub from '../utils/pubSub';

export default function taskStorage() {
  const storage = { }; // nanoid => task object
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

  function printStorage() {
    console.log(storage);
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

  return {
    addTask,
    removeTask,
    getTask,
    printStorage,
    setActiveTask,
    getActiveTask,
    exposeStorageForUpdateCount,
  };
}
