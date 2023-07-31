import Header from './components/Header';

export default function titleHeader() {
  // Cache DOM
  const parent = document.getElementById('content-center');
  let crtHeader = document.getElementById('title-header');

  // Method declaration
  function rerender([iconName, headerText]) {
    const newHeader = Header(iconName, headerText);
    crtHeader.remove();
    parent.insertBefore(newHeader, parent.firstChild);
    crtHeader = newHeader;
  }

  return { rerender };
}
