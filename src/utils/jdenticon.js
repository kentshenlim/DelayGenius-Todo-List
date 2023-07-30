/* eslint-disable no-undef */
export default function updateJdenticon(jNode, text) {
  const p = jNode;
  p.innerHTML = jdenticon.toSvg(text, 200);
}
