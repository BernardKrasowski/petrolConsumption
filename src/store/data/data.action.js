import { DATA_ACTION_TYPES } from "./data.types";

export const createAction = (data) => ({
  type: DATA_ACTION_TYPES.SET_CURRENT_DATA,
  payload: data,
});
