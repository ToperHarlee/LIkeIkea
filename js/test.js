
//функция получения данных
const getData = async (url) => {

    const response = await fetch(url);

    if (!response.ok){
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    return await response.json();

};

/*const data = getResourse('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => console.log(data))*/

//getResourse('database/dataBase.json').then((data) => console.log(data))

//функция отправки данных
const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        //body: JSON.stringify(data),
        body: data
    })

    if (!response.ok){
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    return await response.json();
}

//sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify())