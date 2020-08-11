import* as types from "../../_actions";

export default function (state = [], action){
    const response = action.response;
    switch (action.type) {
        case types.ADD_ROLE_MENU_SUCCESS:
            return{...state, response};
        case types.ADD_ROLE_ERROR:
            return{...state, response};
        default:
            return state;
    }
}