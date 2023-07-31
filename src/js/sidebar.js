import pubSub from '../utils/pubSub';
import SidebarCard from './components/SidebarCard';

export default function sidebar() {
  // Cache DOM
  const myDayBtn = document.getElementById('my-day-btn');
  const importantBtn = document.getElementById('important-btn');
  const plannedBtn = document.getElementById('planned-btn');
  const completedBtn = document.getElementById('completed-btn');
  const myDayCount = document.getElementById('my-day-count');
  const importantCount = document.getElementById('important-count');
  const plannedCount = document.getElementById('planned-count');
  const completedCount = document.getElementById('completed-count');
  const allBtn = [myDayBtn, importantBtn, plannedBtn, completedBtn];
  const listAdderInput = document.getElementById('list-adder-input');
  const listAdderBtn = document.getElementById('list-adder-btn');
  const listAdder = document.getElementById('list-adder-wrapper');
  const sidebarList = document.getElementById('sidebar-list');
  let activeBtnNode = plannedBtn;

  const textNodeMap = {
    0: myDayCount,
    1: importantCount,
    2: plannedCount,
    3: completedCount,
  };

  const selectorMap = {
    0: { isMyDay: true, isCompleted: false }, // Do not consider completed task
    1: { isImportant: true, isCompleted: false }, // Do not consider completed task
    2: { isCompleted: false },
    3: { isCompleted: true },
  };

  // Map: selector criteria of the four categories
  function getNumberRep(btnNode) {
    return btnNode.getAttribute('data-btn-code');
  }

  function getNumberNode(btnNode) {
    return textNodeMap[getNumberRep(btnNode)];
  }

  // Method declaration
  function getSelectorObj(btnNode) {
    // Return an object specifying the criteria of tasks to be rendered if
    // btnNode clicked
    const numRep = getNumberRep(btnNode);
    return selectorMap[numRep] || {};
  }

  function updateAllCount(taskStore) {
    for (let i = 0; i < allBtn.length; i += 1) {
      const btnNode = allBtn[i];
      const numNode = getNumberNode(btnNode); // Of which text content to be updated
      let count = 0;
      const tasks = Object.values(taskStore);
      const selectorObj = getSelectorObj(btnNode);
      const criteriaKey = Object.keys(selectorObj);
      for (let task = 0; task < tasks.length; task += 1) {
        let res = true;
        for (let cKey = 0; cKey < criteriaKey.length; cKey += 1) {
          if (tasks[task][criteriaKey[cKey]] !== selectorObj[criteriaKey[cKey]]) {
            res = false;
            break;
          }
        }
        if (res) count += 1;
      }
      numNode.textContent = count || '';
    }
  }

  function requestUpdateCount() {
    pubSub.publish('update_count_requested', null);
  }

  function updateActiveCategory(btnNode) {
    activeBtnNode.classList.remove('active-btn-node');
    activeBtnNode = btnNode;
    activeBtnNode.classList.add('active-btn-node');
  }

  function finalizeAddTaskRequest(taskObj) {
    const finalTaskObj = taskObj; // Shallow copy, need to preserve method
    const extraSelector = getSelectorObj(activeBtnNode);
    const cKeys = Object.keys(extraSelector);
    for (let i = 0; i < cKeys.length; i += 1) {
      finalTaskObj[cKeys[i]] = extraSelector[cKeys[i]]; // Overwrite
    }
    pubSub.publish('add_task_finalized', finalTaskObj);
  }

  function setUpNewList(finalListName) {
    const nextBtnCode = Object.keys(selectorMap).length;
    const [sidebarCardNode, txtNode] = SidebarCard(nextBtnCode, finalListName);
    textNodeMap[nextBtnCode] = txtNode;
    selectorMap[nextBtnCode] = { [`is-list-${nextBtnCode}`]: true, isCompleted: false };
    // eslint-disable-next-line no-use-before-define
    sidebarCardNode.addEventListener('click', (e) => handleClick(e), true);
    sidebarList.insertBefore(sidebarCardNode, listAdder);
    // Atop of the adder, so adder will go down
  }

  // Event handlers
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const btnNode = e.currentTarget;
    const selectorObj = getSelectorObj(btnNode);
    pubSub.publish('update_cardShelf_requested', selectorObj); // Update with these selectors
    updateActiveCategory(e.currentTarget); // Not target; might refer to child
  }
  allBtn.forEach((btn) => {
    const p = btn;
    p.addEventListener('click', (e) => handleClick(e));
  }, true);

  function handleClickAddNewList() {
    const newListName = listAdderInput.value;
    if (!newListName.length) return;
    listAdderInput.value = '';
    pubSub.publish('add_list_requested', newListName);
  }
  listAdderBtn.onclick = handleClickAddNewList;

  return {
    getSelectorObj,
    updateAllCount,
    requestUpdateCount,
    finalizeAddTaskRequest,
    setUpNewList,
  };
}
