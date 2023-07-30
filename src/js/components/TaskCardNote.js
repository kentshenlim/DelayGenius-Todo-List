export default function TaskCardNote(arr) {
  /*
  arr: Array of objects, [{disp, color}]
  */
  const resNode = document.createElement('ul');

  arr.forEach((element) => {
    if (resNode.firstChild) { // If not first
      const dotNode = document.createElement('li');
      dotNode.textContent = ' • ';
      resNode.appendChild(dotNode);
    }
    const { disp, color } = element;
    const li = document.createElement('li');
    li.textContent = disp;
    li.style.color = color || 'auto';
    resNode.appendChild(li);
  });

  return resNode;
}
