import TaskCard from './components/TaskCard';

export default function ui() {
  // Cache DOM
  const cardShelf = document.getElementById('card-shelf');

  function addTask(obj) {
    const cardNode = TaskCard(obj);
    cardShelf.appendChild(cardNode);
  }

  return { addTask };
}
