const SET_CATEGORIES_LINK = 'SET_CATEGORIES_LINK_SOFT_FURNITURE';
const SET_CATEGORIES_LINK_ACTIVE = 'SET_CATEGORIES_LINK_SOFT_FURNITURE_ACTIVE';


const initialState = [];


export const filterSoftFurniture = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_LINK:
            const addActive = action.arr.map(item => {
                return { ...item, active: false }
            })

            return addActive
        case SET_CATEGORIES_LINK_ACTIVE:

            const arrActiveLinks = action.arr.map(item => {
                if (item.url === action.activeLink) {
                    return { ...item, active: true }
                }
                else return { ...item, active: false }
            })
            return arrActiveLinks


        default: return state
    }
}


export const setCategoriesLink = (arr) => ({ type: SET_CATEGORIES_LINK, arr });
export const setCategoriesLinkActive = (arr, activeLink) => ({ type: SET_CATEGORIES_LINK_ACTIVE, activeLink, arr });