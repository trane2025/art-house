const SET_CATEGORIES_LINK_DECOR = 'SET_CATEGORIES_LINK_DECOR';
const CATERORY_TOGGLE_DECOR = 'CATERORY_TOGGLE_DECOR';
const SET_CATEGORIES_LINK_DECOR_PARAM = 'SET_CATEGORIES_LINK_DECOR_PARAM_DECOR';


const initialState = null;


export const filterDecor = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_LINK_DECOR:

            return action.arr

        case CATERORY_TOGGLE_DECOR:

            const categoryLink = { ...state.entities[action.typeCategory][action.id], open: action.open };

            const newState = {
                ...state,
                entities: { ...state.entities, [action.typeCategory]: { ...state.entities[action.typeCategory], [action.id]: categoryLink } }
            }
            return newState

        case SET_CATEGORIES_LINK_DECOR_PARAM:

            const categoryActive = { ...action.arr.decorLink.entities.category[action.arr.activeCategoryId], open: true, active: true };
            const categoryItemActive = { ...action.arr.decorLink.entities.categoryItems[action.arr.activeCategoryItemid], open: true, active: true };
            const ItemChildActive = { ...action.arr.decorLink.entities.childsItems[action.arr.activeCategoryItemChild], active: true }

            let categorysActive = {};


            if (action.arr.activeCategoryItemChild === 0 && action.arr.activeCategoryItemid === 0) {
                categorysActive = {
                    ...action.arr.decorLink.entities,
                    category: { ...action.arr.decorLink.entities.category, [action.arr.activeCategoryId]: categoryActive }
                };
            }
            else if (action.arr.activeCategoryItemChild === 0) {

                categorysActive = {
                    ...action.arr.decorLink.entities,
                    category: { ...action.arr.decorLink.entities.category, [action.arr.activeCategoryId]: categoryActive },
                    categoryItems: { ...action.arr.decorLink.entities.categoryItems, [action.arr.activeCategoryItemid]: categoryItemActive }
                }

            }
            else {
                categorysActive = {
                    ...action.arr.decorLink.entities,
                    category: { ...action.arr.decorLink.entities.category, [action.arr.activeCategoryId]: categoryActive },
                    categoryItems: { ...action.arr.decorLink.entities.categoryItems, [action.arr.activeCategoryItemid]: categoryItemActive },
                    childsItems: { ...action.arr.decorLink.entities.childsItems, [action.arr.activeCategoryItemChild]: ItemChildActive }
                }
            }


            return {
                ...action.arr.decorLink,
                entities: categorysActive
            }


        default: return state
    }
}


export const setCategoriesLinkDecor = (arr) => ({ type: SET_CATEGORIES_LINK_DECOR, arr });

export const categoryToggleDecor = (id, typeCategory, open) => ({ type: CATERORY_TOGGLE_DECOR, id, typeCategory, open });


export const setCategoriesLinkParamPage = (arr) => ({ type: SET_CATEGORIES_LINK_DECOR_PARAM, arr });