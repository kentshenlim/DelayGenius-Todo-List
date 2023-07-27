import './utils/jdenticon';
import './style/style.css';
import './style/scrollbar.css';
import taskStore from './js/taskStore';
import addForm from './js/addForm';
import ui from './js/ui';
import pubSub from './utils/pubSub';

document.addEventListener('DOMContentLoaded', () => {
  addForm();
  const storage = taskStore();
  const userInterface = ui();
  pubSub.subscribe('add_task', storage.addTask);
  pubSub.subscribe('add_task', userInterface.addTask);
  pubSub.subscribe('add_task', storage.printStorage);
});
