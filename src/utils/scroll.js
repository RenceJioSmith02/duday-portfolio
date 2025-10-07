// src/utils/scroll.js
export function smoothScroll(e, id) {
  e.preventDefault();
  const target = document.getElementById(id);
  if (target) {
    const targetPosition = target.offsetTop - 60; // adjust for navbar height
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // ms
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const run = startPosition + distance * easeInOutCubic(progress);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }
}
