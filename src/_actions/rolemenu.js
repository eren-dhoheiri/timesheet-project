import * as types from "./index";

export const rolemenuAction = () => {
    return{
        type: types.FETCH_ROLE_MENU,
    };
};

export const rolemenuAddAction = (role_id) => {
    return {
        type: types.ADD_ROLE_MENU,
        role_id,
    };
};

export const rolemenuUpdateAction = (role_id) => {
    return {
        type: types.UPDATE_ROLE_MENU,
        role_id,
    };
};

export const rolemenuDeleteAction = (role_id) => {
    return {
        type: types.DELETE_ROLE_MENU,
        role_id,
    };
};