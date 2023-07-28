import './utils/jdenticon';
import './style/style.css';
import './style/scrollbar.css';
import taskStore from './js/taskStore';
import addForm from './js/addForm';
import ui from './js/ui';
import pubSub from './utils/pubSub';

document.addEventListener('DOMContentLoaded', () => {
  const form = addForm();
  const storage = taskStore();
  const userInterface = ui();
  pubSub.subscribe('add_task', storage.addTask);
  pubSub.subscribe('add_task', userInterface.addTask);
  pubSub.subscribe('add_task', storage.printStorage);
  pubSub.subscribe('complete_task', (id) => storage.getTask(id).toggleIsCompleted());
  pubSub.subscribe('complete_task', storage.printStorage);
  pubSub.subscribe('click_card', form.collapse);
});
