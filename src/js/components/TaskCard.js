import format from 'date-fns/format';
import differenceInDays from 'date-fns/differenceInDays';
import isSameYear from 'date-fns/isSameYear';
import TaskCardNote from './TaskCardNote';
import updateJdenticon from '../../utils/jdenticon';

function getDateFormatObj(valueAsDate) {
  const formatStr = isSameYear(valueAsDate, new Date())
    ? 'E, MMMM d' : 'E, MMMM d, u';
  const [color, prepend] = differenceInDays(valueAsDate, new Date()) >= 0
    ? ['auto', 'Due '] : ['red', 'Overdue, '];
  return { disp: prepend + format(valueAsDate, formatStr), color };
}

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
  jdenticon.classList.add('identicon');
  updateJdenticon(jdenticon, taskName); // jdenticon is unique mapping of taskName

  const details = document.createElement('div');
  details.classList.add('task-card--details', 'flex-vertical');

  const taskNameNode = document.createElement('h3');
  taskNameNode.classList.add('flex-horizontal');
  taskNameNode.textContent = taskName;
  details.appendChild(taskNameNode);

  const list = TaskCardNote([getDateFormatObj(dueDate)]);
  details.appendChild(list);

  resNode.append(...[circle, jdenticon, details]);

  return resNode;
}
