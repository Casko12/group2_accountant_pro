import actions from './actions';

const {
  SINGLE_TYPE_INCOME_BEGIN,
  SINGLE_TYPE_INCOME_SUCCESS,
  SINGLE_TYPE_INCOME_ERR,

  FILTER_TYPE_INCOME_BEGIN,
  FILTER_TYPE_INCOME_SUCCESS,
  FILTER_TYPE_INCOME_ERR,

  SORTING_TYPE_INCOME_BEGIN,
  SORTING_TYPE_INCOME_SUCCESS,
  SORTING_TYPE_INCOME_ERR,
} = actions;

const initialStateFilter = {
  data: [],
  loading: false,
  error: null,
};

const typeIncomeReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_TYPE_INCOME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_TYPE_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case FILTER_TYPE_INCOME_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case SORTING_TYPE_INCOME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SORTING_TYPE_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SORTING_TYPE_INCOME_ERR:
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

const SingleTypeIncomeReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_TYPE_INCOME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_TYPE_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SINGLE_TYPE_INCOME_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleTypeIncomeReducer, typeIncomeReducer };
