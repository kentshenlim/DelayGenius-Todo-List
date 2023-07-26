import './icon';
import './style/style.css';
import './style/scrollbar.css';
import TaskCard from './js/components/TaskCard';
import taskStore from './js/taskStore';
import addForm from './js/addForm';
import pubSub from './utils/pubSub';

const cardShelf = document.getElementById('card-shelf');
const p1 = TaskCard('What the fuck', [{ disp: 'An example task again', color: 'green' }]);
cardShelf.append(p1);

document.addEventListener('DOMContentLoaded', () => {
  addForm();
  const storage = taskStore();
  pubSub.subscribe('add_task', storage.addTask);
  pubSub.subscribe('add_task', storage.printStorage);
});
