import parseISO from 'date-fns/parseISO';
import pubSub from '../utils/pubSub';
import Task from './components/Task';

export default function taskStorage() {
  let storage = { }; // nanoid => task object
  const listStorage = {}; // listName => count (to get, e.g. "name(1)", "name(2)")
  let activeTaskId;

  // Method declaration
  function init() {
    const data = JSON.parse(localStorage.getItem('delay-genius-storage'));
    if (!data) return;
    // Restore the dueDate as date object; date object format lost to
    // JSON.stringify
    // Also need to recreate all Task object because of methods lost
    const keys = Object.keys(data);
    const storageNew = {};
    for (let i = 0; i < keys.length; i += 1) {
      data[keys[i]].dueDate = parseISO(data[keys[i]].dueDate);
      storageNew[keys[i]] = new Task(data[keys[i]]);
    }
    storage = storageNew;
    pubSub.publish('update_count_requested', null);
    pubSub.publish('click_active_sidebar', null);
  }

  function syncData() {
    localStorage.setItem('delay-genius-storage', JSON.stringify(storage));
  }

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

  function exposeProcessedListName(name) {
    listStorage[name] = (listStorage[name] || 0) + 1;
    const finalName = listStorage[name] === 1 ? name : `${name}(${listStorage[name] - 1})`;
    pubSub.publish('add_list_processed', finalName);
  }

  return {
    init,
    syncData,
    addTask,
    removeTask,
    getTask,
    printStorage,
    printListStorage,
    setActiveTask,
    getActiveTask,
    exposeStorageForUpdateCount,
    exposeStorageForUpdateCardShelf,
    exposeProcessedListName,
  };
}
