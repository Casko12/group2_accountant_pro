import Cookies from 'js-cookie';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('auth/login', JSON.stringify(values));
      console.log(response.data);
      if (response.data.status === 'error') {
        dispatch(loginErr(response.data.message));
      } else {
        Cookies.set('access_token', response.data.token);
        Cookies.set('logedIn', true);
        dispatch(loginSuccess(true));
        callback();
      }
    } catch (err) {
      alert(err.message);
    }
  };
};

const fbLogin = (callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      Cookies.set('logedIn', true);
      dispatch(loginSuccess(true));
      callback();
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const register = (values) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('auth/register', values);
      if (response.data.status === 'error') {
        dispatch(loginErr('Registration failed!'));
        alert(response.data.message);
      } else {
        dispatch(loginSuccess(false));
        alert(response.data);
      }
    } catch (err) {
      alert(err.message);
    }
  };
};

const logOut = (callback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      Cookies.remove('logedIn');
      Cookies.remove('access_token');
      dispatch(logoutSuccess(false));
      callback();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut, register, fbLogin };
