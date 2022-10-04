import { AnyAction } from 'redux';

interface ShopState {
    fetchResponse: object;
}


const initialState: ShopState = {
    fetchResponse: {}
};

//TODO change action names 
export default function reducer(
    state = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case "ACTION1":
        case "ACTION1":
            return { ...state, loading: true };
        case "ACTION2":
            return { ...state, loading: false, post: action.json, showModal: true };
        case "ACTION3":
            return { ...state, showModal: false };
        case "ACTION4":
            return { ...state, loading: false, fetchResponse: action.jsonFetch };
        default:
            return state;
    }
}

