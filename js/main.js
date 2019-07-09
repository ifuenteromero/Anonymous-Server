'use strict';
const btnMenuElement = document.querySelector('.nav-trigger');
const btnCloseElement = document.querySelector('.nav-close');
const menuElement = document.querySelector('.page__header')

function openMenu(){
  menuElement.classList.add('page__header--open');
  btnMenuElement.classList.add('hidden');
}

function closeMenu(){
  menuElement.classList.remove('page__header--open');
  btnMenuElement.classList.remove('hidden');
}


btnMenuElement.addEventListener('click',openMenu);
btnCloseElement.addEventListener('click',closeMenu);