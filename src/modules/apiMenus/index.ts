import { apiFetch } from "../../utils/apiFetch";

export const getApiMenus = async () => {
    return apiFetch({
        url: 'localhost:algo/menus/item',
        method: 'GET'
    })
}

export const getApiSubItems = async () => {
    return apiFetch({
        url: 'localhost:algo/menu/subitem',
        method: 'GET'
    })
}

export const registerItemMenu = async () => {
    return apiFetch({
        url: 'localhost:route/cad',
        method: 'POST'
    })
}






