'use strict';
const images = document.querySelectorAll('.content');
const navList = document.querySelector('.nav-list');
const navItems = [...navList.children];

navList.addEventListener('click', function (e) {
  const selectedItem = e.target.closest('.nav-item');
  if (!selectedItem) return;

  // Add class on selected item
  navItems.forEach(item => {
    if (selectedItem === item) selectedItem.classList.add('active');
    else item.classList.remove('active');
  });

  // Show selected item's image
  const selectedItemIndex = navItems.indexOf(selectedItem);
  const currentImage = images[selectedItemIndex];

  images.forEach(image => {
    if (currentImage === image) image.classList.add('show');
    else image.classList.remove('show');
  });
});
