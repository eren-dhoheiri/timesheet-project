import * as types from "./index";

export const menuAction = () => {
  return {
    type: types.FETCH_MENU,
  };
};

export const menuAddAction = (menu) => {
  return {
    type: types.ADD_MENU,
    menu,
  };
};

export const menuUpdateAction = (id) => {
  return {
    type: types.UPDATE_MENU,
    id,
  };
};

export const menuDeleteAction = (id) => {
  return {
    type: types.DELETE_MENU,
    id,
  };
};
