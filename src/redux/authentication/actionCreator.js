import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('auth/login', JSON.stringify(values));
      Cookies.set('token', response.data.token);
      Cookies.set('logedIn', true);
      dispatch(loginSuccess(true));
      callback();
    } catch (err) {
      toast.error(err.message);
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
  return (dispatch) => {
    dispatch(loginBegin());

    const registerPromise = new Promise((resolve, reject) => {
      DataService.post('auth/register', values)
        .then((response) => {
          setTimeout(() => resolve(response), 1500);
        })
        .catch((error) => {
          setTimeout(() => reject(error), 1500);
        });
    });

    toast.promise(registerPromise, {
      pending: 'Đang tạo tài khoản...',
      success: 'Tạo tài khoản thành công',
      error: {
        render({ data }) {
          // Display the error data in the toast
          return `Tạo tài khoản thất bại: ${data.message}`;
        },
        autoClose: 2500,
      },
    });

    registerPromise
      .then(() => {
        // Handle success here if needed
      })
      .catch(() => {
        // Handle error here if needed
      });
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
const getProfile = () => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.get('auth/profile');
      return response.data;
    } catch (err) {
      toast.error(err.message);
    }
  };
};

export { login, logOut, register, fbLogin, getProfile };
