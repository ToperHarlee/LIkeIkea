
const PARAM = {
    cat: 'category',
    subcat: 'subcategory',
    search: ['name', 'description', 'category', 'subcategory']
};



export const getData = {
    url: 'database/dataBase.json',
    get(process){
        console.log(this);
        fetch(this.url)
            .then((response) => response.json())//декодирует ответ в формате JSON,https://learn.javascript.ru/fetch
            .then((process));
        //без resolve просто цепочка выполнения
    },
    wishlist(list, callback){
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id));//эти данные фильтруем на основе тех данных которые получены из loadData(список wishlist и функцию которая выводит данные в консоль/на страницу)
            callback(result);
        })//это process если что эта функция получает данные которые вернутся от первого then
    },
    item(value, callback){
        this.get((data) => {
            const result = data.find(item => item.id === value);//value это idd
            callback(result);
        })
    },
    cart(list, callback){
        this.get((data) => {
            const result = data.filter(item => list
                .some(obj => obj.id === item.id));
            callback(result);
        })
    },
    category(prop, value, callback){
        this.get((data) => {
            const result = data.filter(item =>
                item[PARAM[prop]].toLowerCase() === value.toLowerCase());
            callback(result);
        })
    },
    search(value, callback){
        this.get((data) => {
            const result =  data.filter(item => {
                for (const prop in item){
                    if (PARAM.search.includes(prop) &&
                        item[prop].toLowerCase().includes(value.toLowerCase())){
                        return true;
                    }
                }
            });
            callback(result);
        })
    },
    catalog(callback){
        this.get((data) => {
            const result = data.reduce((arr, item) => {
                if (!arr.includes(item.category)){
                    arr.push(item.category);
                }
                return arr;
            }, []);
            callback(result);
        });
    },
    subCatalog(value, callback){
        this.get((data) => {
            const result = data.filter(item => item.category === value)
                .reduce((arr, item) => {
                    if(!arr.includes(item.subcategory)){
                        arr.push(item.subcategory);
                    }
                    return arr;
                }, []);// [] в конце для того чтобы данные сформировались в массив(а не первый элемент)
            callback(result);
        });
    }
};








