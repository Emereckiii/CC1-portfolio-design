document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.parent > .div1, .parent > .div2, .parent > .div3');
  if (!boxes.length) {
    console.warn('No spotlight boxes found — check selectors and HTML classes.');
  }
  boxes.forEach(box => {
    box.style.setProperty('--x', '50%');
    box.style.setProperty('--y', '50%');

    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      box.style.setProperty('--x', `${x}%`);
      box.style.setProperty('--y', `${y}%`);
    });
    // do NOT reset --x/--y on mouseleave so spotlight fades from last position
  });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
    });
});
