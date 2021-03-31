const SET_BREAD_CRUBS = 'SET_BREAD_CRUBS';


const initialState = [];

const breadCrumbs = (state = initialState, action) => {
    switch (action.type) {
        case SET_BREAD_CRUBS:
            return action.arr
        default: return state
    }
}

export default breadCrumbs;

export const setBreadCrubs = (arr) => ({ type: SET_BREAD_CRUBS, arr });