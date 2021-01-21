const SET_CARDS_LIGHT = 'SET_CARDS_LIGHT';
const SET_CARDS_LIGHT_MORE = 'SET_CARDS_LIGHT_MORE';


const initialState = [];



export const cardsLight = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS_LIGHT:
            if (action.arr) {
                return {
                    goods: [...action.arr],
                    showBtn: action.showBtn
                }
            }
            else return {
                goods: action.arr,
                showBtn: '0'
            }
        case SET_CARDS_LIGHT_MORE:
            return {
                goods: [...state.goods, ...action.arr],
                showBtn: action.showBtn
            }
        default: return state
    }
}


export const setCardsLight = (arr, showBtn) => ({ type: SET_CARDS_LIGHT, arr, showBtn });
export const setCardsLightMore = (arr, showBtn) => ({ type: SET_CARDS_LIGHT_MORE, arr, showBtn });
