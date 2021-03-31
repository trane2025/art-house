const SET_CARDS_DECOR = 'SET_CARDS_DECOR';
const SET_CARDS_DECOR_MORE = 'SET_CARDS_DECOR_MORE';


const initialState = [];



export const cardsDecor = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS_DECOR:
            if (action.arr) {
                return {
                    goods: [...action.arr]
                }
            }
            else return {
                goods: null,
                showBtn: '0'
            }
        case SET_CARDS_DECOR_MORE:

            return {
                goods: [...state.goods, ...action.arr],
                showBtn: action.showBtn
            }
        default: return state
    }
}


export const setCardsDecor = (arr) => ({ type: SET_CARDS_DECOR, arr });
export const setCardsDecorMore = (arr, showBtn) => ({ type: SET_CARDS_DECOR_MORE, arr, showBtn });
