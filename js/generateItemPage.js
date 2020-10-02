import {getData} from "./getData.js";


const generateItemPage = () => {

    const renderCard = ({ category, count, description, id, name, img, price, subcategory }) => {
        //console.log(data);

    };

    if (location.hash && location.pathname.includes('card')){
        getData.item(location.hash.substring(1), renderCard);
    }

};

export default generateItemPage;






