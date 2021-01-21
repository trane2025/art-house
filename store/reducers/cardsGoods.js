const SET_GOODS = 'SET_GOODS';
const GET_GOODS_MORE = 'GET_GOODS_MORE';


const initialState = [];



export const cardsGoods = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            return {
                goods: [...action.goods],
                showBtn: action.showBtn
            }
        case GET_GOODS_MORE:
            return {
                goods: [...state.goods, ...action.goods],
                showBtn: action.showBtn
            }
        default: return state;
    }
}

export const setGoods = (goods, showBtn) => ({ type: SET_GOODS, goods, showBtn });
export const setGoodsMore = (goods, showBtn) => ({ type: GET_GOODS_MORE, goods, showBtn });

// export const getGots = () => {
//     return dispatch => {
//         rootAPI.getGoods().then(response => {
//             dispatch(setGods(response));
//         })
//     }
// }

// export const getGotsMore = (number) => {
//     return dispatch => {
//         rootAPI.getGoodsMore(number).then(response => {
//             dispatch(setGodsMore(response));
//         })
//     }
// }