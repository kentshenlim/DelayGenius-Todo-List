export default function TaskCardNote(arr) {
  /*
  arr: Array of objects, [{disp, color}]
  */
  const resNode = document.createElement('ul');

  arr.forEach((element) => {
    const { disp, color } = element;
    const li = document.createElement('li');
    li.textContent = disp;
    li.style.color = color || 'auto';
    resNode.appendChild(li);
  });

  return resNode;
}
