const SET_CARDS = 'SET_CARDS_SOFT_FURNITURE';
const SET_CARDS_MORE = 'SET_CARDS_SOFT_FURNITURE_MORE';


const initialState = [];



export const cardsSoftFurniture = (state = initialState, action) => {
    switch (action.type) {

        case SET_CARDS:
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
        case SET_CARDS_MORE:
            debugger;
            return {
                goods: [...state.goods, ...action.arr],
                showBtn: action.showBtn
            }
        default: return state
    }
}


export const setCardsSoftFurniture = (arr, showBtn) => ({ type: SET_CARDS, arr, showBtn });
export const setCardsSoftFurnitureMore = (arr, showBtn) => ({ type: SET_CARDS_MORE, arr, showBtn });


