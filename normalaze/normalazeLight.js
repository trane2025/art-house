import { normalize, schema } from "normalizr";

export const normalizeLight = (arr, query) => {

    const category = arr.filter(item => item.parent_id === '0');
    const navigation = category.map(item => {
        return {
            ...item,
            open: false,
            categoryItems: arr.filter(categoryItem => categoryItem.parent_id === item.category_id),
        }
    })



    const categoryItems = new schema.Entity('categoryItems');

    const categoryNormalize = new schema.Entity('category', {
        categoryItems: [categoryItems]
    })

    const LightsArr = normalize(navigation, [categoryNormalize]);

    return LightsArr
}

export const normalizeLightParamPage = (arr, query) => {

    const arrAdd = arr.map(item => {
        return {
            ...item,
            active: false
        }
    })

    const category = arrAdd.filter(item => item.parent_id === '0');

    // Поиск ативной категории
    const active = arrAdd.find(item => item.url === query);

    let categoryActive = 0;

    if (active.parent_id !== '0') {
        categoryActive = category.find(item => item.category_id === active.parent_id)
    };
    // ................................................................................//

    const navigation = category.map(item => {
        return {
            ...item,
            open: false,
            categoryItems: arrAdd.filter(categoryItem => categoryItem.parent_id === item.category_id),
        }
    })

    const categoryItems = new schema.Entity('categoryItems');

    const categoryNormalize = new schema.Entity('category', {
        categoryItems: [categoryItems]
    })

    const LightsArr = normalize(navigation, [categoryNormalize]);


    if (active.parent_id !== '0') {

        return {
            lightsArr: LightsArr,
            categoryId: categoryActive.id,
            categoryItemId: active.id
        }
    } else {

        return {
            lightsArr: LightsArr,
            categoryId: active.id,
            categoryItemId: 0
        }
    }
}