'use strict';
const openMenuBtn = document.getElementById('open');
const closeMenuBtn = document.getElementById('close');
const navs = [...document.querySelectorAll('.nav')];

openMenuBtn.addEventListener('click', () => navs.forEach(nav => nav.classList.add('visible')));

closeMenuBtn.addEventListener('click', () => navs.forEach(nav => nav.classList.remove('visible')));
