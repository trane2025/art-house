const TOGGLE_CHEKBOX = 'TOGGLE_CHEKBOX';


let initialState = [
    {
        label: 'Стиль',
        isShow: true,
        items: [
            { checkBoxName: 'Модерн', checked: false },
            { checkBoxName: 'Класика', checked: false },
            { checkBoxName: 'Хай-тек', checked: false },
            { checkBoxName: 'Лофт', checked: false },
        ]
    },
    {
        label: 'Материал каркаса',
        isShow: true,
        items: [
            { checkBoxName: 'Метал', checked: false },
            { checkBoxName: 'Дерево', checked: false },
            { checkBoxName: 'ЛДСП', checked: false },
            { checkBoxName: 'МДФ', checked: false },
        ]
    },
    {
        label: 'Цвет каркаса',
        isShow: false,
        items: [
            { checkBoxName: 'Черный', checked: false },
            { checkBoxName: 'Белый', checked: false },
            { checkBoxName: 'Золотой', checked: false },
            { checkBoxName: 'Дубовый', checked: false },
            { checkBoxName: 'Красный', checked: false },
            { checkBoxName: 'Зелёный', checked: false },
        ]
    },
    {
        label: 'Страна',
        isShow: false,
        items: [
            { checkBoxName: 'Малазия', checked: false },
            { checkBoxName: 'Китай', checked: false },
            { checkBoxName: 'Турция', checked: false },
            { checkBoxName: 'Россия', checked: false },
            { checkBoxName: 'Италия', checked: false },
            { checkBoxName: 'Австралия', checked: false },
        ]
    },
]

initialState = initialState.map((el) => {
    'Присваиваем id'
    const label = el.label;
    const isShow = el.isShow;
    return {
        label,
        isShow,
        items: [
            ...el.items.map((item, index) => {
                return {
                    ...item,
                    id: `${el.label}-${index + 1}`
                }
            })
        ]
    }

})




const filter = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHEKBOX:
            return state.map((el) => {
                return {

                    label: el.label,
                    items: [...el.items.map(item => {

                        if (item.id === action.id) {
                            return {
                                ...item, checked: action.checked
                            }
                        }
                        return {
                            ...item
                        }
                    })]
                }
            })


        default: return state
    }
}
export default filter;


export const toggleCheckbox = (id, checked) => {

    return {
        type: TOGGLE_CHEKBOX, checked, id
    }
}

