import axios from 'axios';
import { EMAIL_CHANGED,
     PASSWORD_CHANGED,
      LOGIN_USER_FAIL,
      LOGIN_USER_SUCCESS, 
      ADD_SLIDER,
      EDIT_SLIDER,
      SLIDER_NAME,
      SLIDER_IMAGE,
      ADD_SLIDER_SUCCESS,
      ADD_SLIDER_FAIL,
      ADD_LOADER,
      SLIDER_STATUS,
      EDIT_STATUS_FALSE,
    LOGIN_USER } from './types';

export const emailChanged = (text) => {
            return {
            type: EMAIL_CHANGED,
            payload: text
            };
};

export const passwordChanged = (text) => {
    return {
    type: PASSWORD_CHANGED,
    payload: text
    };
};

export const updateEditSatusFalse = () => {
 
  return {
    type: EDIT_STATUS_FALSE
  };
};

export const addSlider = ({ name, image }) => {

    
  return (dispatch) => {
    dispatch({ type: ADD_LOADER });
   axios.post('http://127.0.0.1:8000/api/addSlider', {
    name,
    image,
})
.then(user => addSliderSuccess(dispatch, user))
.catch(error => {
  addSliderFail(dispatch, error.response.statusText);
});
};
};

export const sliderName = (text) => {
  return {
    type: SLIDER_NAME,
    payload: text
  };
};

export const sliderImage = (text) => {
  return {
    type: SLIDER_IMAGE,
    payload: text
  };
};

export const submitSliderStatus = () => {
  return {
    type: SLIDER_STATUS
  };
};

export const loginUser = ({ email, password }) => {
  
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
       axios.post('http://127.0.0.1:8000/api/login', {
      email,
      password,
    })
    .then(user => loginUserSuccess(dispatch, user))
   .catch(() => loginUserFail(dispatch));
    };
};

export const editSlider = (id) => {
  return {
    type: EDIT_SLIDER,
    payload: id
    };
};

const loginUserFail = (dispatch) => {
  
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
   const loginUserSuccess = async (dispatch, user) => {
    
     if (user.data.error) {
       loginUserFail();
     }
     
    
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  };

  const addSliderSuccess = async (dispatch, user) => {
    
    if (user.data.status === 500) {
      addSliderFail(dispatch, user.data.error);
    }
    else
    {
      dispatch({
        type: ADD_SLIDER_SUCCESS,
        payload: user
      });
    }
 };

 const addSliderFail = async (dispatch, error) => {
     
  dispatch({
    type: ADD_SLIDER_FAIL,
    payload: error
  });
};

