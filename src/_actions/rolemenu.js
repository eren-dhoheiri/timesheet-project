import * as types from "./index";

export const rolemenuAction = () => {
    return{
        type: types.FETCH_ROLE_MENU,
    };
};

export const rolemenuAddAction = (id) => {
    return {
        type: types.ADD_ROLE_MENU,
        id,
    };
};

export const rolemenuUpdateAction = (id) => {
    return {
        type: types.UPDATE_ROLE_MENU,
        id,
    };
};

export const rolemenuDeleteAction = (id) => {
    return {
        type: types.DELETE_ROLE_MENU,
        id,
    };
};