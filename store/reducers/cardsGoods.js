const SET_GOODS = 'SET_GOODS';
const GET_GOODS_MORE = 'GET_GOODS_MORE';


const initialState = [];



export const cardsGoods = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            if (action.arr) {
                return {
                    goods: [...action.arr]
                }
            }
            else return {
                goods: null,
                showBtn: '0'
            }
        case GET_GOODS_MORE:
            return {
                goods: [...state.goods, ...action.goods],
                showBtn: action.showBtn
            }
        default: return state;
    }
}

export const setGoods = (arr) => ({ type: SET_GOODS, arr });
export const setGoodsMore = (goods, showBtn) => ({ type: GET_GOODS_MORE, goods, showBtn });

