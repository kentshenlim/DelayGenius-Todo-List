/* eslint-disable no-undef */
const placeholder2 = document.getElementById('identiconPlaceholder2');
placeholder2.innerHTML = jdenticon.toSvg(
  'name of the task',
  200,
);

const jdenticons = document.querySelectorAll('.jdenticon');
jdenticons.forEach((j) => {
  j.innerHTML = jdenticon.toSvg('name of the task', 200);
});
