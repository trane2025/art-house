const SET_CATEGORIES_LINK = 'SET_CATEGORIES_LINK';
const SET_CATEGORIES_LINK_PARAM_PAGE = 'SET_CATEGORIES_LINK_PARAM_PAGE';
const CATERORY_TOGGLE = 'CATERORY_TOGGLE';


const initialState = [];


export const filterLight = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_LINK:
            return action.arr

        case CATERORY_TOGGLE:
            let newCategory = { ...state.entities.category };

            newCategory[action.id].open = action.open;
            return { ...state, entities: { ...state.entities, category: newCategory } }

        case SET_CATEGORIES_LINK_PARAM_PAGE:
            if (action.categoryItemId === 0) {
                const ChangeCategory = { ...action.arr.entities.category[action.categoryId], open: true, active: true };

                const newArr = {
                    ...action.arr.entities.category,
                    [action.categoryId]: ChangeCategory
                }

                return {
                    ...action.arr,
                    entities: { ...action.arr.entities, category: newArr }
                }
            }
            else {
                const ChangeCategory = { ...action.arr.entities.category[action.categoryId], open: true, active: true };
                const ChangeCategoryItems = { ...action.arr.entities.categoryItems[action.categoryItemId], active: true };

                const newCategory = {
                    ...action.arr.entities.category,
                    [action.categoryId]: ChangeCategory
                }

                const newCategoryItem = {
                    ...action.arr.entities.categoryItems,
                    [action.categoryItemId]: ChangeCategoryItems
                }

                return {
                    ...action.arr,
                    entities: {
                        ...action.arr.entities,
                        category: newCategory,
                        categoryItems: newCategoryItem
                    }
                }
            }

        default: return state
    }
}


export const setCategoriesLink = (arr) => ({ type: SET_CATEGORIES_LINK, arr });
export const setCategoriesLinkParamPage = (arr, categoryId, categoryItemId) => ({ type: SET_CATEGORIES_LINK_PARAM_PAGE, arr, categoryId, categoryItemId });
export const categoryToggle = (id, open) => ({ type: CATERORY_TOGGLE, id, open });
