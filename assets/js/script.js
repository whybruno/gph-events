document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    
    if (!mobileMenu.classList.contains('hidden')) {
      // Menu is open, set background to menu-hover.png
      menuButton.classList.remove('bg-[url(\'./assets/images/menu.png\')]');
      menuButton.classList.add('bg-[url(\'./assets/images/menu-close.png\')]');
      // Change hover to menu.png
      menuButton.classList.remove('hover:bg-[url(\'./assets/images/menu-hover.png\')]');
      menuButton.classList.add('hover:bg-[url(\'./assets/images/menu-close-hover.png\')]');
    } else {
      // Menu is closed, revert background to menu.png
      menuButton.classList.remove('bg-[url(\'./assets/images/menu-close.png\')]');
      menuButton.classList.add('bg-[url(\'./assets/images/menu.png\')]');
      // Change hover to menu-hover.png
      menuButton.classList.remove('hover:bg-[url(\'./assets/images/menu-close-hover.png\')]');
      menuButton.classList.add('hover:bg-[url(\'./assets/images/menu-hover.png\')]');
    }
  });
});