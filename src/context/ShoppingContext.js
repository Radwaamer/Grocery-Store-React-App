import { createContext } from "react";

const ShoppingContext = createContext({
    card:[],
    setCard:()=>{}
});

export default ShoppingContext;