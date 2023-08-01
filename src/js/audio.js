import ding from '../assets/audio/ding.wav';

export default function audio() {
  // Cache DOM
  const bodyNode = document.querySelector('body');

  const dingNode = document.createElement('audio');
  dingNode.src = ding;
  bodyNode.appendChild(dingNode);

  function playDing() {
    dingNode.currentTime = 0;
    dingNode.play();
  }

  return { playDing };
}
