export default function SidebarCard(dataBtnCode, listName) {
  const li = document.createElement('li');
  li.setAttribute('data-btn-code', dataBtnCode);
  li.classList.add('flex-horizontal');

  const listIcon = document.createElement('ion-icon');
  listIcon.setAttribute('name', 'albums-outline');

  const nameNode = document.createElement('button');
  nameNode.textContent = listName;

  const countNode = document.createElement('p');
  countNode.classList.add('flex-horizontal');

  li.append(...[listIcon, nameNode, countNode]);
  return [li, countNode]; // countNode needed for mapping
}
