/* eslint-disable no-undef */
const placeholder2 = document.getElementById('identiconPlaceholder2');
placeholder2.innerHTML = jdenticon.toSvg(
  'name of the task',
  200,
);

export default function updateJdenticon(jNode, text) {
  const p = jNode;
  p.innerHTML = jdenticon.toSvg(text, 200);
}
