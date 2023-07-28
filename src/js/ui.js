import TaskCard from './components/TaskCard';

export default function ui() {
  // Cache DOM
  const cardShelf = document.getElementById('card-shelf');

  function addTask(obj) {
    const cardNode = TaskCard(obj);
    cardShelf.appendChild(cardNode);
  }

  function removeTask(id) {
    const node = document.querySelector(`[data-id="${id}"]`);
    node.remove();
  }

  function rerender(storage) {
    while (cardShelf.lastChild) cardShelf.removeChild(cardShelf.lastChild);
    const tasks = Object.values(storage);
    tasks.forEach((task) => addTask(task));
  }

  return { addTask, removeTask, rerender };
}
