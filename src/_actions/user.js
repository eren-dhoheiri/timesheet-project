import * as types from "./index";

export const usersListAction = () => {
  return {
    type: types.FETCH_USERS_LIST,
  };
};

export const userUpdateAction = (id) => {
  return {
    type: types.UPDATE_USER_DETAILS,
    id,
  };
};

export const userDeleteAction = (id) => {
  return {
    type: types.ON_DELETE_USER,
    id,
  };
};
