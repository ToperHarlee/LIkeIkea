
localStorage.setItem('data', JSON.stringify([{a:1},{}, {}]));

console.log(JSON.parse(localStorage.getItem('data')));

export const getLocalStorage = key => {
    return localStorage.getItem(key) ?
        JSON.parse(localStorage.getItem(key)) :
        [];
};

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


