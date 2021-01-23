const SET_PAGINATOR = 'SET_PAGINATOR';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREV_PAGE';


const initialState = {
    numberShowGoods: 16,//Колличество отображаемых товаров на странице
    numberAllGoods: null,//Колличество всех товаров
    numberShowCount: 8, //Число показа страниц
    activePage: null, //Активный номер страницы
    countAllPages: null, //Колличество всех номеров
    numberActiveGroup: 0, //Номер активной группы
    countAllGroup: null, //Число всех групп
    arr: []
}

const getPages = (countAllPages, numberShowCount) => {
    let countVal = 0;
    let newArr = [];
    const numItaration = Math.ceil(countAllPages / numberShowCount);

    for (let i = 0; i < numItaration; i++) {
        newArr.push([]);
        for (let j = 0; j < numberShowCount; j++) {

            countVal++
            if (countVal <= countAllPages) {
                newArr[i].push(countVal);
            }
            else break

        }
    }
    return newArr;
}

const paginator = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGINATOR:
            const numberAllGoods = +action.arr.count_all_goods;
            const activePage = +action.arr.nmb_page;
            const countAllPages = Math.ceil(numberAllGoods / state.numberShowGoods);
            const arr = getPages(countAllPages, state.numberShowCount);
            const numberActiveGroup = Math.ceil(activePage / state.numberShowCount) - 1;
            const countAllGroup = Math.ceil(countAllPages / state.numberShowCount);

            return {
                ...state,
                numberAllGoods,
                activePage,
                countAllPages,
                arr,
                numberActiveGroup,
                countAllGroup
            }
        case NEXT_PAGE:
            return {
                ...state,
                numberActiveGroup: action.num
            }

        default: return state
    }
}

export default paginator;



export const setPaginator = (arr) => ({ type: SET_PAGINATOR, arr });
export const nextPage = (num) => ({ type: NEXT_PAGE, num })
export const prevPage = (num) => ({ type: PREV_PAGE, num })