import {getData} from "./getData.js";//?
//страница для генерации товаров

const wishList = ['idd005', 'idd065', 'idd085', 'idd035'];

const PARAM = {
    cat: 'category',
    subcat: 'subcategory',
    search: ['name', 'description', 'category', 'subcategory', "img"]
};

const generateGoodsPage = () => {

    const mainHeader = document.querySelector('.main-header'),
        goodsList = document.querySelector('.goods-list');

    const generateCards = (data) => {
        goodsList.textContent = '';// удаление поля карточек(кстати я бы раньше удалял содержимое через классы, а тут способ гибче)
        data.forEach(item => {
            goodsList.insertAdjacentHTML('afterbegin', `
               <li class="goods-list__item">
                    <a class="goods-item__link" href="${item.id}">
                    <article class="goods-item">
                    <div class="goods-item__img">
                    <img src="${item.img[0]}"
                data-second-image="${item.img[1]}" alt="${item.name}">
                    </div>
                    <p class="goods-item__new">Новинка</p>
                    <h3 class="goods-item__header">${item.name}</h3>
                <p class="goods-item__description">${item.description}</p>
                <p class="goods-item__price">
                    <span class="goods-item__price-value">${item.price}</span>
                    <span class="goods-item__currency"> ₽</span>
                </p>
                <button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${item.id}"></button>
                    </article>
                    </a>
                </li>
            `);
        })
        if (document.querySelector('.search-input').value !== data.value || getData.search.value !== data.values){
            goodsList.textContent = `
            <li>По вашему запросу ничего не найдено</li>
            `;
        }
    };

    if(location.pathname.includes('goods') && location.search){
        const search = decodeURI(location.search);//возвращает строку(которую мы разделим на prop-ключ и value - значение
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if (prop === 's'){
            getData.search(value, generateCards);
            mainHeader.textContent = `Поиск: ${value}`;
        } else if (prop === 'wishlist'){
            getData.wishlist(wishList, generateCards);//внимательно с тем как пишем переменные
            mainHeader.textContent = `Список желаемого:`;
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, generateCards);
            mainHeader.textContent = value;
        }
    }
};

export default generateGoodsPage;


