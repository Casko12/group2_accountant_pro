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

const fetchData = async () => {
  const response = await DataService.get('your-api-path');
  return response.data;
};
const filterSinglePage = (paramsId) => {
  return async (dispatch) => {
    try {
      dispatch(singleIncomeBegin());
      const initialState = await fetchData();
      const data = initialState.filter((project) => {
        return project.id === parseInt(paramsId, 10);
      });
      dispatch(singleIncomeSuccess(data));
    } catch (err) {
      dispatch(singleIncomeErr(err));
    }
  };
};

const filterIncomeByStatus = (status) => {
  return async (dispatch) => {
    try {
      dispatch(filterIncomeBegin());
      const initialState = await fetchData();
      const data = initialState.filter((project) => {
        if (status !== 'all') {
          return project.status === status;
        }
        return initialState;
      });
      dispatch(filterIncomeSuccess(data));
    } catch (err) {
      dispatch(filterIncomeErr(err.toString()));
    }
  };
};

const sortingIncomeByCategory = (sortBy) => {
  return async (dispatch) => {
    try {
      dispatch(sortingIncomeBegin());
      const initialState = await fetchData();
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingIncomeSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingIncomeErr(err));
    }
  };
};

export { filterSinglePage, filterIncomeByStatus, sortingIncomeByCategory };
