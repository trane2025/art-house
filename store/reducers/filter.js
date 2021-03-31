const TOGGLE_CHEKBOX = 'TOGGLE_CHEKBOX';
const SET_FILTER = 'SET_FILTER';
const CHANGE_RANGE = 'CHANGE_RANGE';


let initialState = [];


const filter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.obj
        case TOGGLE_CHEKBOX:

            return {
                ...state,
                entities: {
                    ...state.entities,
                    checkBoxItems: {
                        ...state.entities.checkBoxItems, [action.id]: {
                            ...state.entities.checkBoxItems[action.id],
                            checked: action.checked
                        }
                    }
                }
            }
        case CHANGE_RANGE:
            let minItems = { ...state.entities.checkBoxItems[action.idMinCount] };
            let maxItems = { ...state.entities.checkBoxItems[action.idMaxCount] };
            maxItems.latName = action.max
            minItems.latName = action.min
            maxItems.checked = true
            minItems.checked = true
            return {
                ...state,
                entities: {
                    ...state.entities,
                    checkBoxItems: {
                        ...state.entities.checkBoxItems,
                        [action.idMaxCount]: maxItems,
                        [action.idMinCount]: minItems
                    }
                }
            }
        default: return state
    }
}
export default filter;


export const setFilter = (obj) => ({ type: SET_FILTER, obj })

export const changeRange = (min, max, idMinCount, idMaxCount) => ({ type: CHANGE_RANGE, min, max, idMinCount, idMaxCount });

export const toggleCheckbox = (id, checked) => {

    return {
        type: TOGGLE_CHEKBOX, checked, id
    }
}

