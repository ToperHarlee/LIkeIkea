
import {getLocalStorage} from "./storage.js";
import {setLocalStorage} from "./storage.js";


const userData = {
    wishListData: getLocalStorage('wishList'),
    get wishList(){
        //console.log(this.wishListData);
        return this.wishListData;
        //когда обращаемся к сеттеру и что то ему присваивать то вызываем функцию сеттера
        //если просто получаем данные вызывается геттер
    },

    set wishList(id){
        //console.log(this.wishListData);
        if (this.wishListData.includes(id)){
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1);
        } else {
            this.wishListData.push(id);
        }
        setLocalStorage('wishList', this.wishList)
    },

    cartListData : getLocalStorage('cartList'),
    get cartList (){
        return this.cartListData;
    },
    set cartList(id){
        let obj = this.cartListData.find(item => item.id === id);//находим обьект по id
        if(obj){
            obj.count++;
        } else {
            obj = {
                id,
                count: 1,
            };
            this.cartListData.push(obj);
        }
        setLocalStorage('cartList', this.cartList);
        //console.log(this.cartListData);
    },

    set changeCountcartList(itemCart){
        let obj = this.cartListData.find(item => item.id === itemCart.id);
        obj.count = itemCart.count;

        setLocalStorage('cartList', this.cartList);
    },

    set deleteItemCart (idd) {
        let index = -1;
        this.cartList.forEach((item, i) => {
            if (item.id === idd){
                index = i;
            }
        });
        this.cartList.splice(index, 1);
        setLocalStorage('cartList', this.cartList);
    }
}

export default userData;







