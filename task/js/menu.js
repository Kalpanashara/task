(function () {
    'use strict';
  
    document.addEventListener('DOMContentLoaded', function () {
      // Menu Maker
      function menumaker(menu, options) {
        const settings = Object.assign({
          format: 'dropdown',
          sticky: false,
        }, options);
  
        // Toggle mobile menu
        const mobileBtn = menu.querySelector('.mobile-btn');
        if (mobileBtn) {
          mobileBtn.addEventListener('click', function () {
            this.classList.toggle('menu-opened');
            const mainMenu = this.nextElementSibling;
            if (mainMenu) {
              mainMenu.classList.toggle('open');
              mainMenu.style.display = mainMenu.classList.contains('open') ? 'block' : 'none';
            }
          });
        }
  
        // Add submenu toggles
        const menuItems = menu.querySelectorAll('li ul');
        menuItems.forEach(function (submenu) {
          const parent = submenu.parentNode;
          parent.classList.add('menu-item-has-children');
  
          // Create submenu button
          const submenuButton = document.createElement('span');
          submenuButton.classList.add('submenu-button');
          parent.insertBefore(submenuButton, parent.firstChild);
  
          // Add dropdown arrow
          const arrowIcon = document.createElement('i');
          arrowIcon.className = 'fa fa-angle-down';
          const link = parent.querySelector('a');
          if (link) {
            link.appendChild(arrowIcon);
          }
  
          // Submenu toggle behavior
          submenuButton.addEventListener('click', function () {
            this.classList.toggle('submenu-opened');
            submenu.classList.toggle('open');
            submenu.style.display = submenu.classList.contains('open') ? 'block' : 'none';
          });
        });
  
        // Sticky menu
        if (settings.sticky) {
          menu.style.position = 'fixed';
        }
  
        // Responsive adjustments
        function resizeFix() {
          const mediasize = 768;
          if (window.innerWidth > mediasize) {
            menu.querySelectorAll('ul').forEach(function (ul) {
              ul.style.display = 'block';
            });
          } else {
            menu.querySelectorAll('ul').forEach(function (ul) {
              ul.style.display = 'none';
              ul.classList.remove('open');
            });
          }
        }
  
        resizeFix();
        window.addEventListener('resize', resizeFix);
      }
  
      // Initialize menu
      const flexmenu = document.getElementById('flexmenu');
      if (flexmenu) {
        menumaker(flexmenu, { format: 'multitoggle' });
      }
    });
  })();
  