import { AnyAction } from 'redux';

interface ShopState {
    products: object,
    cart: object
}


const initialState: ShopState = {
    products: {},
    cart: {}
};

//TODO change action names 
export default function reducer(
    state = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case "ACTION1":
        case "GETPRODUCTSINSTOCK":
            return { ...state, products: { productsInstock: action.products } };
        case "ADDITEMTOCART":
            return { ...state, cart: {} };
        case "ACTION3":
            return { ...state, showModal: false };
        case "ACTION4":
            return { ...state, loading: false, fetchResponse: action.jsonFetch };
        default:
            return state;
    }
}

