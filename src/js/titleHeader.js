import Header from './components/Header';
import pubSub from '../utils/pubSub';

export default function titleHeader() {
  // Cache DOM
  const parent = document.getElementById('content-center');
  let crtHeader = document.getElementById('title-header');
  const sidebarWrapper = document.getElementById('content-sidebar');

  // Event handler
  function handleClickIcon() {
    if (!sidebarWrapper.classList.contains('hidden')) return;
    sidebarWrapper.classList.remove('hidden');
    pubSub.publish('active_iconName_requested', null);
  }
  document.querySelector('#title-header > button').onclick = handleClickIcon;

  // Method declaration
  function rerender({ iconName, headerText }) {
    const newHeader = Header(iconName, headerText);
    newHeader.firstChild.onclick = handleClickIcon;
    crtHeader.remove();
    parent.insertBefore(newHeader, parent.firstChild);
    crtHeader = newHeader;
  }

  function switchToMenuIcon() {
    rerender({ iconName: 'list', headerText: crtHeader.children[1].textContent });
  }

  function switchToActiveIcon(obj) {
    rerender(obj);
  }

  return { rerender, switchToMenuIcon, switchToActiveIcon };
}
