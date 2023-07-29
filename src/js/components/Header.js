export default function Header(iconName, headerText) {
  /*
  iconName: string, value of name attribute in ion-icon element
  headerText: string, e.g. "Planned", "Important", "My Day"
  */
  const resNode = document.createElement('header');
  resNode.classList.add('content-center--header', 'flex-horizontal');

  const btn = document.createElement('button');
  btn.classList.add('flex-horizontal');

  const ionIcon = document.createElement('ion-icon');
  ionIcon.setAttribute('name', iconName);
  btn.appendChild(ionIcon);

  const txt = document.createElement('h2');
  txt.classList.add('accent-text', 'flex-horizontal');
  txt.textContent = headerText;

  resNode.append(...[btn, txt]);

  return resNode;
}
