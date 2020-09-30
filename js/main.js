'use strict';
//вводная часть - основы
// console.log(document);
// console.dir(document);

// console.log(document.getElementById('hnf-menu-close-btn'));
// console.log(document.getElementsByClassName('btn'));

/*let varName = document.getElementsByClassName('btn');
const varName2 = document.getElementsByTagName('button');
const varName3 = document.querySelector('button');
const varName4 = document.querySelector('.btn');
const varName5 = document.querySelectorAll('button');
const varName6 = document.querySelectorAll('.btn');

console.log(varName);
console.log(varName2);
console.log(varName3);
console.log(varName4);
console.log(varName5);
console.log(varName6);

const varNameZ = document.querySelector('.svg-icon');
console.log('varNameZ:', varNameZ);
*/

// основная часть
//day-1
const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    btnClose = document.querySelector('.btn-close'),
    catalogList = document.querySelector('.catalog-list'),
    subCatalog = document.querySelector('.subcatalog'),
    subCatalogHeader = document.querySelector('.subcatalog-header'),
    btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
};

const OpenSubMenu = (event) => {
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList){
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => {
    if(e.code === 'Escape'){
        closeMenu();
    }
});
catalog.addEventListener('click', OpenSubMenu);
btnReturn.addEventListener('click', closeSubMenu)





















