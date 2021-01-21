


const initialState = [
    {
        pageName: 'tables',
        pageLinks: [
            { href: 'derevyannye_stoly', label: 'Деревянные столы', type: '11' },
            { href: 'dizaynerskie_stoly', label: 'Дизайнерские столы', type: '12' },
            { href: 'zhurnalnye_stoliki', label: 'Журнальные столики', type: '13' },
            { href: 'keramicheskie_stoly', label: 'Керамические столы', type: '14' },
            { href: 'laminirovannye_stoly', label: 'Ламинированные столы', type: '15' },
            { href: 'steklyannye_stoly', label: 'Стеклянные столы', type: '16' },
            { href: 'stoly_s_plitkoy', label: 'Столы с плиткой', type: '17' },
        ]
    },
    {
        pageName: 'chairs',
        pageLinks: [
            { href: 'Barnye_stulya', label: 'Барные стулья', type: '21' },
            { href: 'derevyannye_stulya', label: 'Деревянные стулья', type: '22' },
            { href: 'dizaynerskie_stulya', label: 'Дизайнерские стулья', type: '23' },
            { href: 'metallicheskie_stulya', label: 'Металлические стулья', type: '24' },
            { href: 'plastikovye_stoly', label: 'Пластиковые стулья', type: '25' },
            { href: 'skami', label: 'Скамьи', type: '26' },
        ]
    },

]



export const pageLinks = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}


export const sortPage = (namePage) => {
    const link = initialState.find(item => item.pageName === namePage);
    return link.pageLinks
}

