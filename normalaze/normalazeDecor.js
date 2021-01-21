import { normalize, schema } from "normalizr";


export const normalizeDecor = (arr, query) => {

    const category = arr.filter(item => item.child_id === '0' && item.parent_id === '0');



    const navigation = category.map(item => {
        return {
            ...item,
            open: false,
            categoryItems: arr.filter(categoryItem => categoryItem.parent_id === item.id_cat && categoryItem.child_id === '0').map(categoryItemChild => {
                return {
                    ...categoryItemChild,
                    open: false,
                    childs: arr.filter(childItem => {
                        return childItem.child_id === categoryItemChild.id_cat
                    })
                }
            })
        }
    })
    const childsItems = new schema.Entity('childsItems');

    const categoryItems = new schema.Entity('categoryItems', {
        childs: [childsItems]
    });
    const categor = new schema.Entity('category', {
        categoryItems: [categoryItems]
    })

    const decorArr = normalize(navigation, [categor]);
    return decorArr
}


export const normalizeDecorParamPage = (arr, query) => {

    const arrAdd = arr.map(item => {
        return {
            ...item,
            active: false
        }
    })

    const category = arrAdd.filter(item => item.child_id === '0' && item.parent_id === '0');


    const categoryActive = arrAdd.find(item => item.url === query);

    let categoryItem = 0;
    let categoryItemChild = 0;

    if (categoryActive.parent_id !== '0') {
        categoryItem = arrAdd.find(item => item.id_cat === categoryActive.parent_id);
    }

    if (categoryActive.child_id !== '0') {
        categoryItemChild = arrAdd.find(item => item.id_cat === categoryActive.child_id);
    }

    const navigation = category.map(item => {
        return {
            ...item,
            open: false,
            categoryItems: arrAdd.filter(categoryItem => categoryItem.parent_id === item.id_cat && categoryItem.child_id === '0').map(categoryItemChild => {
                return {
                    ...categoryItemChild,
                    open: false,
                    childs: arrAdd.filter(childItem => {
                        return childItem.child_id === categoryItemChild.id_cat
                    })
                }
            })
        }
    })

    const childsItems = new schema.Entity('childsItems');

    const categoryItems = new schema.Entity('categoryItems', {
        childs: [childsItems]
    });
    const categor = new schema.Entity('category', {
        categoryItems: [categoryItems]
    })

    const decorLink = normalize(navigation, [categor]);

    if (categoryActive.parent_id !== '0' && categoryActive.child_id !== '0') {
        return {
            activeCategoryId: categoryItem.id,
            activeCategoryItemid: categoryItemChild.id,
            activeCategoryItemChild: categoryActive.id,
            decorLink
        }
    }
    else if (categoryActive.parent_id !== '0') {

        return {
            activeCategoryId: categoryItem.id,
            activeCategoryItemid: categoryActive.id,
            activeCategoryItemChild: categoryItemChild,
            decorLink
        }
    }
    else {
        return {
            activeCategoryId: categoryActive.id,
            activeCategoryItemid: categoryItem,
            activeCategoryItemChild: categoryItemChild,
            decorLink
        }
    }
}

