import { nanoid } from 'nanoid';
import pubSub from '../utils/pubSub';

export default function taskStorage() {
  const storage = { a: 1 }; // nanoid => task object

  function addTask(taskObj) {
    storage[nanoid()] = taskObj;
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
    return storage;
  }

  return {
    addTask, removeTask, getTask, toggleTaskImportant, printStorage,
  };
}
