window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio)
    return; // stop function from running if invalid key is pressed
  audio.currentTime = 0; // rewind the audio other wise multiple doesnt work
  audio.play();
  const key = document .querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.add('playing');
  // use transition end event to remove class
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})
