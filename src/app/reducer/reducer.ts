import { AnyAction } from 'redux';

interface ShopState {
    fetchResponse: object;
}


const initialState: ShopState = {
    fetchResponse: {}
};


export default function reducer(
    state = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case "MAKE_POST":
        case "FETCH_POST":
            return { ...state, loading: true };
        case "POST_MADE":
            return { ...state, loading: false, post: action.json, showModal: true };
        case "MODAL_CLOSE":
            return { ...state, showModal: false };
        case "FETCH_SUCCESSFUL":
            return { ...state, loading: false, fetchResponse: action.jsonFetch };
        default:
            return state;
    }
}

