import Axios from 'axios';



export const rootAPI = {
    getGoods(page, option, type = '', numPage, filter = '') {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server/app_with_pagination_test.php?page=${page}&type=${type}&count=1&sort=${option}&nmb_page=${numPage}${filter}`).then(response => response.data)
        )
    },
    getProductForId(id) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server/app_with_pagination_test.php?id_tovar=${id}`).then(response =>
                response.data)

        )
    }
}



export const rootAPInew = {
    getGoods(page, option, type = '', numPage) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server/app_with_pagination_test.php?page=${page}&type=${type}&count=1&sort=${option}&nmb_page=${numPage}`).then(response => response.data)
        )
    },
    getGoodsMore(page, option, count, type = '') {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server/app.php?page=${page}&type=${type}&count=${count}&sort=${option}`).then(response => response.data)
        )
    },
    getProductForId(id) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server/app.php?id_tovar=${id}`).then(response =>
                response.data)

        )
    }
}

export const rootAPIsvet = {
    getLight(type = '', sort = '1', page) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server_lights/app_with_pagination.php?page=lights&sort=${sort}&type=${type}&nmb_page=${page}`).then(response => response.data)
        )
    },
    getProduct(id) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server_lights/app.php?id_tovar=${id}`).then(response => response.data)
        )
    }
}





export const rootAPIdecor = {
    getDecor(type = '', sort = '1', page) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server_garda_decor/app_with_pagination.php?page=garda_decor&sort=${sort}&type=${type}&nmb_page=${page}`).then(response => response.data)
        )
    },
    getProduct(id) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server_garda_decor/app.php?id_tovar=${id}`).then(response => response.data)
        )
    }
}



export const rootAPIsoftfurniture = {
    getGoods(type = '', sort = '1', page) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server_bellus/app_with_pagination.php?page=bellus&sort=${sort}&type=${type}&nmb_page=${page}`).then(response => response.data)
        )
    },
    getMore(count, sort = '1', type = '') {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server_bellus/app.php?page=bellus&type=${type}&count=${count}&sort=${sort}`).then(response => response.data)
        )
    },
    getProduct(id) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/server_bellus/app.php?id_tovar=${id}`).then(response => response.data)
        )
    }
}



export const rootAPIsearch = {

    getGoods(value, page) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/search/app_with_pagination.php?text=${value}&nmb_page=${page}`).then(response => response.data)
        )
    }
}




export const rootAPIactions = {
    getActions() {
        return (
            Axios.get(`https://server.arthouse-decor.ru/promo/app.php?page=promo`).then(response => response.data)
        )
    },
    getActionsId(id = '', page) {
        return (
            Axios.get(`https://server.arthouse-decor.ru/promo/app_with_pagination.php?id_promo=${id}&nmb_page=${page}`).then(response => response.data)
        )
    }
}

export const rootAPIorder = {

    postOrder(order) {
        return (
            Axios.post('https://server.arthouse-decor.ru/mailto/app.php', `order=${order}`).then(response => response.data)
        )
    }
}






