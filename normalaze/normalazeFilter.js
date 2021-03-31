import { normalize, schema } from "normalizr";


export const normalizeFilter = (arr) => {


    const arrCheckBox = arr.map(item => {
        return {
            ...item,
            id: item.lat_name,
            items: item.items.map(el => {
                return {
                    checkBoxName: el.itemsName,
                    checked: el.checked,
                    id: el.latName + random(1, 10000),
                    latName: el.latName
                }
            })
        }
    })

    const checkBoxItems = new schema.Entity('checkBoxItems');

    const checkBox = new schema.Entity('checkBox', {
        items: [checkBoxItems]
    });


    const normalizeFilter = normalize(arrCheckBox, [checkBox]);

    return normalizeFilter
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}