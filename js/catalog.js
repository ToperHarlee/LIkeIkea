'use strict';
import {getData} from "./getData.js";
import generateSubCatalog from "./generateSubCatalog.js";
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

export const catalog = () => {
    const updateSubCatalog = generateSubCatalog();
    const btnBurger = document.querySelector('.btn-burger'),
        catalog = document.querySelector('.catalog'),
        //btnClose = document.querySelector('.btn-close'),
        catalogList = document.querySelector('.catalog-list'),
        subCatalog = document.querySelector('.subcatalog'),
        subCatalogHeader = document.querySelector('.subcatalog-header'),
        btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay);

    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        catalog.classList.remove('open');
        overlay.classList.remove('active');
        closeSubMenu();
    };

    const handlerCatalog = (event) => {
        event.preventDefault();
        //const target = event.target;
        const itemList = event.target.closest('.catalog-list__item>a');

        if (itemList){
            //subCatalogHeader.innerHTML = itemList.innerHTML;
            //subCatalog.classList.add('subopen');
            getData.subCatalog(itemList.textContent, (data) => {
                updateSubCatalog(itemList.textContent, data);
                subCatalog.classList.add('subopen');
            });// текст ссылки при клике будет передан в subCatalog

        }
        if (event.target.closest('.btn-close')){
            closeMenu();
        }
    };


    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    }

    btnBurger.addEventListener('click', openMenu);
    //btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', handlerCatalog);
    //btnReturn.addEventListener('click', closeSubMenu)
    subCatalog.addEventListener('click', (event) => {
        const btnReturn = event.target.closest('.btn-return');
        if (btnReturn){//??btnBurger
            closeSubMenu();
        }
    });
    document.addEventListener('keydown', e => {
        if(e.code === 'Escape'){
            closeMenu();
        }
    });
};





















