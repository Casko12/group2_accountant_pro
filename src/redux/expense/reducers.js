import actions from './actions';

const {
  SINGLE_EXPENSE_BEGIN,
  SINGLE_EXPENSE_SUCCESS,
  SINGLE_EXPENSE_ERR,

  FILTER_EXPENSE_BEGIN,
  FILTER_EXPENSE_SUCCESS,
  FILTER_EXPENSE_ERR,

  SORTING_EXPENSE_BEGIN,
  SORTING_EXPENSE_SUCCESS,
  SORTING_EXPENSE_ERR,
} = actions;

const initialStateFilter = {
  data: [],
  loading: false,
  error: null,
};

const expenseReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_EXPENSE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_EXPENSE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case FILTER_EXPENSE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case SORTING_EXPENSE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SORTING_EXPENSE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SORTING_EXPENSE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const SingleExpenseReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_EXPENSE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_EXPENSE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SINGLE_EXPENSE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleExpenseReducer, expenseReducer };
