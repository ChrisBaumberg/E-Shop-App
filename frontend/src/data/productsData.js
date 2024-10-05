import {v4 as uuidv4} from "uuid";

export const initialProducts = [

    {
        id: uuidv4(),
        title: "Coca Cola",
        description: "koffeinhaltige Limonade, Dose: 0,5l",
        price: "0,25",
        size: "0,5",
        comparePrice: "0,75",
        productSize: "l",
        category: "Drinks",
        desposit: true,
        pictureUrl: "../../public/img/Coca-Cola_klein.jpg"
    }
]