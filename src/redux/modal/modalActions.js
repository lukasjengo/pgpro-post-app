import { SHOW_MODAL, HIDE_MODAL } from './modalTypes';

// Modal types: 'addcomment' 'addpost'
export const showModal = type => dispatch => {
  dispatch({ type: SHOW_MODAL, payload: type });
};

export const hideModal = () => dispatch => {
  dispatch({ type: HIDE_MODAL });
};
