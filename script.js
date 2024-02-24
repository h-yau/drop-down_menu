const drpMenuListener = () => {
  const drpMenu = document.querySelector('.drp-menu');
  drpMenu.addEventListener('click', () => {
    drpMenu.classList.toggle('visible');
  });
};

drpMenuListener();
