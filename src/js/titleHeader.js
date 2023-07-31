import Header from './components/Header';

export default function titleHeader() {
  // Cache DOM
  const parent = document.getElementById('content-center');
  let crtHeader = document.getElementById('title-header');
  const sidebarWrapper = document.getElementById('content-sidebar');

  // Event handler
  function handleClickIcon() {
    sidebarWrapper.classList.remove('hidden');
  }
  document.querySelector('#title-header > button').onclick = handleClickIcon;

  // Method declaration
  function rerender([iconName, headerText]) {
    const newHeader = Header(iconName, headerText);
    newHeader.firstChild.onclick = handleClickIcon;
    crtHeader.remove();
    parent.insertBefore(newHeader, parent.firstChild);
    crtHeader = newHeader;
  }

  return { rerender };
}
