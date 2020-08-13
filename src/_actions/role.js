import * as types from "./index";

export const roleAction = () => {
  return {
    type: types.FETCH_ROLE,
  };
};

export const roleAddAction = (role) => {
  return {
    type: types.ADD_ROLE,
    role,
  };
};

export const roleUpdateAction = (id) => {
  return {
    type: types.UPDATE_ROLE,
    id,
  };
};

export const roleDeleteAction = (id) => {
  return {
    type: types.DELETE_ROLE,
    id,
  };
};
