const btnPlay = document.getElementById('onOffBtn');
btnPlay.addEventListener('click', () => {
  const animations = document.querySelectorAll('[data-animation]');
  animations.forEach(animation => {
    const running = animation.style.animationPlayState || 'running';
    animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
  })
});