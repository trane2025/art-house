const SET_LINK = 'SET_LINK';


const initialState = [];



export const pageLinks = (state = initialState, action) => {
    switch (action.type) {
        case SET_LINK:
            debugger;
            return [
                ...action.arr
            ]

        default: return state;
    }
}

export const setPageLinks = (arr) => ({ type: SET_LINK, arr });


export const sortPage = (namePage) => {
    const link = initialState.find(item => item.pageName === namePage);
    return link.pageLinks
}

