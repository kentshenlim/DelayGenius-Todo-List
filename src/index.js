import './style/style.css';
import './style/scrollbar.css';
import taskStoreFactory from './js/taskStore';
import addFormFactory from './js/addForm';
import cardShelfFactory from './js/cardShelf';
import sidebarFactory from './js/sidebar';
import pubSub from './utils/pubSub';

document.addEventListener('DOMContentLoaded', () => {
  const addForm = addFormFactory();
  const taskStore = taskStoreFactory();
  const cardShelf = cardShelfFactory();
  const sidebar = sidebarFactory();
  pubSub.subscribe('add_task_requested', sidebar.finalizeAddTaskRequest);
  pubSub.subscribe('add_task_finalized', taskStore.addTask);
  pubSub.subscribe('add_task_finalized', cardShelf.addTask);
  pubSub.subscribe('add_task_finalized', taskStore.printStorage);
  pubSub.subscribe('add_task_finalized', sidebar.requestUpdateCount);
  pubSub.subscribe('click_circle', (id) => taskStore.getTask(id).toggleIsCompleted());
  pubSub.subscribe('click_circle', (id) => cardShelf.removeTask(id));
  pubSub.subscribe('click_circle', taskStore.printStorage);
  pubSub.subscribe('click_circle', sidebar.requestUpdateCount);
  pubSub.subscribe('click_card', addForm.collapse);
  pubSub.subscribe('click_card', taskStore.setActiveTask);
  pubSub.subscribe('click_card', cardShelf.setActiveTask);
  pubSub.subscribe('click_star', (id) => taskStore.getTask(id).toggleIsImportant());
  pubSub.subscribe('click_star', taskStore.printStorage);
  pubSub.subscribe('click_star', sidebar.requestUpdateCount);
  pubSub.subscribe('update_count_requested', taskStore.exposeStorageForUpdateCount);
  pubSub.subscribe('update_count_processed', sidebar.updateAllCount);
  pubSub.subscribe('update_cardShelf_requested', taskStore.exposeStorageForUpdateCardShelf);
  pubSub.subscribe('update_cardShelf_processed', cardShelf.rerender);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'q') console.log('okay');
  });
});
