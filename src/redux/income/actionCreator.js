import { toast } from 'react-toastify';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const {
  singleIncomeBegin,
  singleIncomeSuccess,
  singleIncomeErr,

  filterIncomeBegin,
  filterIncomeSuccess,
  filterIncomeErr,

  sortingIncomeBegin,
  sortingIncomeSuccess,
  sortingIncomeErr,

  createIncomeBegin,
  createIncomeSuccess,
  createIncomeError,

  deleteIncomeBegin,
  deleteIncomeSucces,
  deleteIncomeError,
} = actions;

const getIncome = () => {
  return async (dispatch) => {
    try {
      dispatch(singleIncomeBegin());
      const response = await DataService.get('incomes');
      dispatch(singleIncomeSuccess(response.data));
      console.log(response.data);
      return response.data;
    } catch (err) {
      dispatch(singleIncomeErr(err.message));
    }
  };
};

const filterSinglePage = (paramsId) => {
  return async (dispatch) => {
    try {
      dispatch(singleIncomeBegin());
      const response = await DataService.get(`incomes/get-by-id?id=${paramsId}`);
      dispatch(singleIncomeSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(singleIncomeErr(err.message));
    }
  };
};

const filterIncomeByStatus = (status) => {
  return async (dispatch) => {
    try {
      dispatch(filterIncomeBegin());
      const response = await DataService.get(`incomes/get-by-status?status=${status}`);
      dispatch(filterIncomeSuccess(response.data));
    } catch (err) {
      dispatch(filterIncomeErr(err.message));
    }
  };
};

const sortingIncomeByCategory = (sortBy) => {
  return async (dispatch) => {
    try {
      dispatch(sortingIncomeBegin());
      const response = await DataService.get(`incomes/sort-by/${sortBy}`);
      setTimeout(() => {
        dispatch(sortingIncomeSuccess(response.data));
      }, 500);
      return response.data;
    } catch (err) {
      dispatch(sortingIncomeErr(err.message));
    }
  };
};
const createIncome = (values) => {
  return async (dispatch) => {
    dispatch(createIncomeBegin());
    const registerPromise = new Promise((resolve, reject) => {
      DataService.post('incomes', values)
        .then((response) => {
          setTimeout(() => resolve(response), 1500);
        })
        .catch((error) => {
          setTimeout(() => reject(error), 1500);
        });
    });
    toast.promise(registerPromise, {
      pending: 'Đang tạo phiếu thu...',
      success: 'Tạo phiếu thu thành công',
      error: {
        render({ data }) {
          return `Tạo phiếu thu thất bại: ${data.message}`;
        },
        autoClose: 2500,
      },
    });

    registerPromise
      .then((data) => {
        dispatch(createIncomeSuccess(data));
      })
      .catch((err) => {
        dispatch(createIncomeError(err));
      });
  };
};

const searchIncome = (searchValue) => {
  return async (dispatch) => {
    try {
      dispatch(sortingIncomeBegin());
      const response = await DataService.get(`incomes/search?search=${searchValue}`);
      setTimeout(() => {
        dispatch(sortingIncomeSuccess(response.data));
      }, 500);

      return response.data;
    } catch (err) {
      dispatch(sortingIncomeErr(err.message));
    }
  };
};

const deleteIncome = (id) => {
  return async (dispatch) => {
    dispatch(deleteIncomeBegin());
    const registerPromise = new Promise((resolve, reject) => {
      DataService.delete(`incomes?id=${id}`)
        .then((response) => {
          dispatch(deleteIncomeSucces());
          setTimeout(() => resolve(response), 1500);
        })
        .catch((error) => {
          dispatch(deleteIncomeError());
          setTimeout(() => reject(error), 1500);
        });
    });
    toast.promise(registerPromise, {
      pending: 'Đang xóa phiếu thu...',
      success: 'Xóa phiếu thu thành công',
      error: {
        render({ data }) {
          return `Xóa phiếu thu thất bại: ${data}`;
        },
        autoClose: 2500,
      },
    });

    registerPromise.then(() => {}).catch(() => {});
  };
};
export {
  filterSinglePage,
  filterIncomeByStatus,
  sortingIncomeByCategory,
  createIncome,
  getIncome,
  searchIncome,
  deleteIncome,
};
