import { getData } from "./getData.js";

const wishList = ['idd005', 'idd065', 'idd085', 'idd035'];

const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd045',
        count: 1
    },
    {
        id: 'idd095',
        count: 2
    },
];

export const loadData = () => {

    if(location.search){
        const search = decodeURI(location.search);
        //console.log(search);
        const prop = search.split('=')[0].substring(1);
        //console.log('prop', prop);
        const value = search.split('=')[1];
        //console.log('value', value);

        if (prop === 's'){
            //console.log(value);
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishlist'){
            getData.wishlist(wishList, (data) => console.dir({wishList:data}));//внимательно с тем как пишем переменные

        } else if (prop === 'cat' || prop === 'subcat') {
            //console.log(prop, value);
            getData.category(prop, value, (data) => console.log(data));
        }
    }

    if (location.hash){
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if (location.pathname.includes('cart')){
        getData.cart(cartList, (data) => console.log(data));
    }

    getData.catalog((data) => console.log(data));
    getData.subCatalog('Декор', (data) => console.log(data));

};






