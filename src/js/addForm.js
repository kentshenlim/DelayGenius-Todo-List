import pubSub from '../utils/pubSub';

export default (() => {
  // Cache DOM
  const textInput = document.getElementById('add-task');
  const dateInput = document.getElementById('add-date');
  const addBtn = document.getElementById('submit-task-card');
  const dateForm = document.querySelector('div.date-form');

  function clearInput() {
    textInput.value = '';
    dateInput.value = '';
  }

  function handleKeyDown() {
    if (textInput.value.length) addBtn.classList.add('active');
    else addBtn.classList.remove('active');
  }

  function handleClickAdd() {
    if (!textInput.value.length) return;
    pubSub.publish('add_task');
  }

  function handleFocus() {
    dateForm.classList.add('active');
  }

  textInput.onkeydown = handleKeyDown;
  addBtn.onclick = handleClickAdd;
  textInput.onfocus = handleFocus;

  pubSub.subscribe('add_task', clearInput);
});
