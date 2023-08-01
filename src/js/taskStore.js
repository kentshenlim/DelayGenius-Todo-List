import parseISO from 'date-fns/parseISO';
import pubSub from '../utils/pubSub';
import Task from './components/Task';

export default function taskStorage() {
  let storage = { }; // nanoid => task object
  let listStorage = {}; // listName => count (to get, e.g. "name(1)", "name(2)")
  let activeTaskId;

  // Method declaration
  function initStorage() {
    const data = JSON.parse(localStorage.getItem('delay-genius-storage'));
    if (!data) return;
    // Restore the dueDate as date object; date object format lost to
    // JSON.stringify
    // Also need to recreate all Task object because of methods lost
    const keys = Object.keys(data);
    const storageNew = {};
    for (let i = 0; i < keys.length; i += 1) {
      if (data[keys[i]].dueDate) data[keys[i]].dueDate = parseISO(data[keys[i]].dueDate);
      storageNew[keys[i]] = new Task(data[keys[i]]);
    }
    storage = storageNew;
    pubSub.publish('update_count_requested', null);
    pubSub.publish('click_active_sidebar', null);
  }

  function initListStorage() {
    const data = JSON.parse(localStorage.getItem('delay-genius-listStorage'));
    if (!data) return;
    listStorage = data;
    const listNames = Object.keys(listStorage);
    for (let i = 0; i < listNames.length; i += 1) {
      for (let j = 0; j < listStorage[listNames[i]]; j += 1) {
        const finalName = j === 0 ? listNames[i] : `${listNames[i]}(${j})`;
        pubSub.publish('add_list_processed', finalName);
      }
    }
    pubSub.publish('update_count_requested', null); // For custom lists, loaded after main lists
  }

  function syncData() {
    localStorage.setItem('delay-genius-storage', JSON.stringify(storage));
    localStorage.setItem('delay-genius-listStorage', JSON.stringify(listStorage));
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
    initStorage,
    initListStorage,
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
