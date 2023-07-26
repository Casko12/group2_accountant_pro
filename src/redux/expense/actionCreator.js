import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const {
  singleExpenseBegin,
  singleExpenseSuccess,
  singleExpenseErr,

  filterExpenseBegin,
  filterExpenseSuccess,
  filterExpenseErr,

  sortingExpenseBegin,
  sortingExpenseSuccess,
  sortingExpenseErr,
} = actions;

const fetchData = async () => {
  const response = await DataService.get('incomes');
  return response.data;
};
const filterSinglePage = (paramsId) => {
  return async (dispatch) => {
    try {
      dispatch(singleExpenseBegin());
      const initialState = await fetchData();
      const data = initialState.filter((project) => {
        return project.id === parseInt(paramsId, 10);
      });
      dispatch(singleExpenseSuccess(data));
    } catch (err) {
      dispatch(singleExpenseErr(err));
    }
  };
};

const filterExpenseByStatus = (status) => {
  return async (dispatch) => {
    try {
      dispatch(filterExpenseBegin());
      const initialState = await fetchData();
      const data = initialState.filter((project) => {
        if (status !== 'all') {
          return project.status === status;
        }
        return initialState;
      });
      dispatch(filterExpenseSuccess(data));
    } catch (err) {
      dispatch(filterExpenseErr(err.toString()));
    }
  };
};

const sortingExpenseByCategory = (sortBy) => {
  return async (dispatch) => {
    try {
      dispatch(sortingExpenseBegin());
      const initialState = await fetchData();
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingExpenseSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingExpenseErr(err));
    }
  };
};

export { filterSinglePage, filterExpenseByStatus, sortingExpenseByCategory };
