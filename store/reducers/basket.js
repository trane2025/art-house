const SET_PRODUCT_BASKET = 'SET_PRODUCT_BASKET';

const TOGGLE_BASKET = 'TOGGLE_BASKET';

const REMOVE_BASKET = 'REMOVE_BASKET';


const initialState = {
    clouseBasket: true,
    goods: [],
    countPrice: 0
};

const basket = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_BASKET:

            return {
                ...state,
                goods: action.arr,
                countPrice: countPrice(action.arr)
            }

        case TOGGLE_BASKET:
            return {
                ...state,
                clouseBasket: action.toggle
            }

        case REMOVE_BASKET:
            removeLocalStorage();
            return initialState

        default: return state
    }
}

export default basket;

export const setProductBasket = (arr) => ({ type: SET_PRODUCT_BASKET, arr });

export const setToggleBasket = (toggle) => ({ type: TOGGLE_BASKET, toggle });

export const removeBasket = () => ({ type: REMOVE_BASKET });




const removeLocalStorage = () => {
    localStorage.setItem('basket', '{}');
}

const countPrice = (arr) => arr.reduce((sum, count) => {
    return +count.price * count.productCount + sum
}, 0)


