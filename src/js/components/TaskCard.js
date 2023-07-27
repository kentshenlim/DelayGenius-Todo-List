import TaskCardNote from './TaskCardNote';

export default function TaskCard({ taskName, dueDate }) {
  /*
  taskName: string, task name displayed
  arr: Array of objects, [{displayString, colorString}]
  */
  const resNode = document.createElement('button');
  resNode.classList.add('task-card', 'flex-horizontal');

  const circle = document.createElement('ion-icon');
  circle.setAttribute('name', 'ellipse-outline');

  const jdenticon = document.createElement('div');
  jdenticon.classList.add('jdenticon');

  const details = document.createElement('div');
  details.classList.add('task-card--details', 'flex-vertical');

  const taskNameNode = document.createElement('h3');
  taskNameNode.classList.add('flex-horizontal');
  taskNameNode.textContent = taskName;
  details.appendChild(taskNameNode);

  const list = TaskCardNote([{ disp: dueDate, color: 'green' }]);
  details.appendChild(list);

  resNode.append(...[circle, jdenticon, details]);

  return resNode;
}
