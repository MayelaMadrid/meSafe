import * as services from '../services/helCenter';
import * as actionTypes from '../actionTypes/helCenter';

export const getCenterByType = (type) => async dispatch => {
  const result = await services.getCenterByType(type);
  dispatch({
    type: actionTypes.CENTERS_TYPE,
    payload: result
  });
};