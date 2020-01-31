import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING } from './types';

//Get techs from server
export const getTechs = () => {
  return async dispatch => {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  };
};

//Add Tech
export const addTech = tech => {
  return async dispatch => {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  };
};

export const deleteTech = id => {
  return async dispatch => {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  };
};

//Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
