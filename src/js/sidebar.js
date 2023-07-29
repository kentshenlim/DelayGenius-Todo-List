import pubSub from '../utils/pubSub';

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

  // Map: selector criteria of the four categories
  function getNumberRep(btnNode) {
    switch (btnNode) {
      case myDayBtn: return 1;
      case importantBtn: return 2;
      case plannedBtn: return 3;
      case completedBtn: return 4;
      default: return false;
    }
  }

  function getNumberNode(btnNode) {
    switch (btnNode) {
      case myDayBtn: return myDayCount;
      case importantBtn: return importantCount;
      case plannedBtn: return plannedCount;
      case completedBtn: return completedCount;
      default: return false;
    }
  }

  const selectorMap = {
    1: { isMyDay: true },
    2: { isImportant: true, isCompleted: false }, // Do not consider completed task
    3: { isCompleted: false },
    4: { isCompleted: true },
  };

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

  // Event handlers
  function handleClick(e) {
    const btnNode = e.target;
    const selectorObj = getSelectorObj(btnNode);
    pubSub.publish('update_cardShelf_requested', selectorObj); // Update with these selectors
  }
  allBtn.forEach((btn) => {
    const p = btn;
    p.onclick = handleClick;
  });

  return { getSelectorObj, updateAllCount, requestUpdateCount };
}
