const drpMenuListener = () => {
  const drpMenu = document.querySelector('.drp-menu');
  drpMenu.addEventListener('mouseover', () => {
    drpMenu.classList.toggle('visible');
  });
  drpMenu.addEventListener('mouseout', () => {
    drpMenu.classList.toggle('visible');
  });
};

drpMenuListener();
