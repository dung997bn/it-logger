import {
  GET_LOGS,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from './types';

export const getLogs = () => {
  return async dispatch => {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  };
};

//Add Log
export const addLog = log => {
  return async dispatch => {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  };
};

//Delete Log
export const deleteLog = id => {
  return async dispatch => {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  };
};

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

//Clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

//Update Log
export const updateLog = log => {
  return async dispatch => {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  };
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

//Search Log
export const searchLogs = text => {
  return async dispatch => {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  };
};
