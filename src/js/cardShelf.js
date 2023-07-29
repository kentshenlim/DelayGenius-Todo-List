import TaskCard from './components/TaskCard';

export default function ui() {
  // Cache DOM
  const cardShelf = document.getElementById('card-shelf');

  // Method declaration
  function addTask(obj) {
    const cardNode = TaskCard(obj);
    cardShelf.appendChild(cardNode);
  }

  function removeTask(id) {
    const node = document.querySelector(`[data-id="${id}"]`);
    node.remove();
  }

  function setActiveTask(id) {
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach((taskCard) => {
      if (taskCard.getAttribute('data-id') !== id) taskCard.classList.remove('active-task');
      else taskCard.classList.add('active-task');
    });
  }

  function rerender([selectorObj, storage]) {
    while (cardShelf.lastChild) {
      cardShelf.removeChild(cardShelf.lastChild);
    }
    const tasks = Object.values(storage);
    const cKey = Object.keys(selectorObj);
    for (let task = 0; task < tasks.length; task += 1) {
      let isRender = true;
      for (let c = 0; c < cKey.length; c += 1) {
        if (tasks[task][cKey[c]] !== selectorObj[cKey[c]]) {
          isRender = false;
          break;
        }
      }
      if (isRender) addTask(tasks[task]);
    }
  }

  return {
    addTask, removeTask, setActiveTask, rerender,
  };
}
