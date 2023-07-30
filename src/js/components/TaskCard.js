import format from 'date-fns/format';
import differenceInDays from 'date-fns/differenceInDays';
import isSameYear from 'date-fns/isSameYear';
import TaskCardNote from './TaskCardNote';
import updateJdenticon from '../../utils/jdenticon';
import pubSub from '../../utils/pubSub';

function getDateFormatObj(valueAsDate) {
  const formatStr = isSameYear(valueAsDate, new Date())
    ? 'E, MMMM d' : 'E, MMMM d, u';
  const [color, prepend] = differenceInDays(valueAsDate, new Date()) >= 0
    ? ['auto', 'Due ']
    : ['#ed7070', 'Overdue, '];
  return { disp: prepend + format(valueAsDate, formatStr), color };
}

/// Event handlers
function handleClickCircle(e) {
  e.stopPropagation();
  pubSub.publish(
    'click_circle',
    e.target.parentNode.getAttribute('data-id'),
  );
}

function handleClickCardBody(e) {
  pubSub.publish('click_card', e.target.parentNode.getAttribute('data-id'));
}

function handleClickStar(e) {
  e.stopPropagation();
  const crt = e.target.getAttribute('name');
  const next = crt === 'star' ? 'star-outline' : 'star';
  e.target.setAttribute('name', next);
  pubSub.publish('click_star', e.target.parentNode.getAttribute('data-id'));
}

export default function TaskCard({
  taskName, dueDate, id, isImportant, isCompleted, isMyDay,
}) {
  /*
  taskName: string, task name displayed
  arr: Array of objects, [{displayString, colorString}]
  */
  // Event handlers

  // DOM nodes
  const resNode = document.createElement('button');
  resNode.classList.add('task-card', 'flex-horizontal');
  resNode.onclick = handleClickCardBody;
  resNode.setAttribute('data-id', id);

  const circle = document.createElement('ion-icon');
  circle.setAttribute('name', (!isCompleted ? 'ellipse-outline' : 'ellipse'));
  if (!isCompleted) {
    circle.addEventListener('mouseenter', () => circle.setAttribute('name', 'ellipse'));
    circle.addEventListener('mouseleave', () => circle.setAttribute('name', 'ellipse-outline'));
  }
  circle.onclick = handleClickCircle;

  const jdenticon = document.createElement('div');
  jdenticon.classList.add('identicon');
  updateJdenticon(jdenticon, taskName); // jdenticon is unique mapping of taskName

  const details = document.createElement('div');
  details.classList.add('task-card--details', 'flex-vertical');

  const taskNameNode = document.createElement('h3');
  taskNameNode.classList.add('flex-horizontal');
  taskNameNode.textContent = taskName;
  if (isCompleted) {
    taskNameNode.style.textDecoration = 'line-through';
    taskNameNode.style.textDecorationThickness = '2px';
  }
  details.appendChild(taskNameNode);

  const listVar = dueDate ? [getDateFormatObj(dueDate)] : [];
  if (isMyDay) listVar.push({ disp: 'My Day', color: 'orange' });
  const list = TaskCardNote(listVar);
  details.appendChild(list);

  const star = document.createElement('ion-icon');
  star.setAttribute('name', isImportant ? 'star' : 'star-outline');
  star.setAttribute('title', 'Toggle importance');
  star.onclick = handleClickStar;

  resNode.append(...[circle, jdenticon, details, star]);

  return resNode;
}
