import pubSub from '../utils/pubSub';

export default (() => {
  // Cache DOM
  const dateForm = document.querySelector('div.date-form');
  const textInput = document.getElementById('add-task');
  const dateInput = document.getElementById('add-date');
  const addBtn = document.getElementById('submit-task-card');

  // Event handlers
  function handleInputChange() {
    if (textInput.value.length) addBtn.classList.add('active');
    else addBtn.classList.remove('active');
  }

  function handleClickAdd() {
    if (!textInput.value.length) return;
    pubSub.publish('add_task');
    textInput.value = '';
    dateInput.value = '';
    handleInputChange();
  }

  function handleFocus() {
    dateForm.classList.add('active');
  }

  textInput.onkeydown = handleInputChange;
  textInput.onkeyup = handleInputChange;
  addBtn.onclick = handleClickAdd;
  textInput.onfocus = handleFocus;
});
