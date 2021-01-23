const SET_PRELOUDER = 'SET_PRELOUDER';


const initialState = false;



const prelouder = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRELOUDER:
            return state = action.value;

        default: return state
    }
}

export default prelouder;



export const setPrelouder = (value) => ({ type: SET_PRELOUDER, value });