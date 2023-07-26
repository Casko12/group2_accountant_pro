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
} = actions;

const filterSinglePage = (paramsId) => {
  return async (dispatch) => {
    try {
      dispatch(singleIncomeBegin());
      const response = await DataService.get(`incomes/get-by-id?id=${paramsId}`);
      dispatch(singleIncomeSuccess(response.data));
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
    } catch (err) {
      dispatch(sortingIncomeErr(err.message));
    }
  };
};

export { filterSinglePage, filterIncomeByStatus, sortingIncomeByCategory };
