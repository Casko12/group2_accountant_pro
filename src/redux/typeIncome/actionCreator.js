import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const {
  singleTypeIncomeBegin,
  singleTypeIncomeSuccess,
  singleTypeIncomeErr,

  filterTypeIncomeBegin,
  filterTypeIncomeSuccess,
  filterTypeIncomeErr,

  sortingTypeIncomeBegin,
  sortingTypeIncomeSuccess,
  sortingTypeIncomeErr,
} = actions;

const filterSinglePage = () => {
  return async (dispatch) => {
    try {
      dispatch(singleTypeIncomeBegin());
      const response = await DataService.get('typefinanceins');
      dispatch(singleTypeIncomeSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(singleTypeIncomeErr(err.message));
    }
  };
};

const filterTypeIncomeByStatus = (status) => {
  return async (dispatch) => {
    try {
      dispatch(filterTypeIncomeBegin());
      const response = await DataService.get(`incomes/get-by-status?status=${status}`);
      dispatch(filterTypeIncomeSuccess(response.data));
    } catch (err) {
      dispatch(filterTypeIncomeErr(err.message));
    }
  };
};

const sortingTypeIncomeByCategory = (sortBy) => {
  return async (dispatch) => {
    try {
      dispatch(sortingTypeIncomeBegin());
      const response = await DataService.get(`incomes/sort-by/${sortBy}`);
      setTimeout(() => {
        dispatch(sortingTypeIncomeSuccess(response.data));
      }, 500);
    } catch (err) {
      dispatch(sortingTypeIncomeErr(err.message));
    }
  };
};

export { filterSinglePage, filterTypeIncomeByStatus, sortingTypeIncomeByCategory };
