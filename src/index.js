import './utils/jdenticon';
import './style/style.css';
import './style/scrollbar.css';
import taskStoreFac from './js/taskStore';
import addFormFac from './js/addForm';
import cardShelfFac from './js/cardShelf';
import pubSub from './utils/pubSub';

document.addEventListener('DOMContentLoaded', () => {
  const addForm = addFormFac();
  const taskStore = taskStoreFac();
  const cardShelf = cardShelfFac();
  pubSub.subscribe('add_task', taskStore.addTask);
  pubSub.subscribe('add_task', cardShelf.addTask);
  pubSub.subscribe('add_task', taskStore.printStorage);
  pubSub.subscribe('complete_task', (id) => taskStore.getTask(id).toggleIsCompleted());
  pubSub.subscribe('complete_task', (id) => cardShelf.removeTask(id));
  pubSub.subscribe('complete_task', taskStore.printStorage);
  pubSub.subscribe('click_card', addForm.collapse);
  pubSub.subscribe('click_card', taskStore.setActiveTask);
  pubSub.subscribe('click_card', cardShelf.setActiveTask);
  pubSub.subscribe('click_star', (id) => taskStore.getTask(id).toggleIsImportant());
  pubSub.subscribe('click_star', taskStore.printStorage);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'q') console.log('okay');
  });
});
