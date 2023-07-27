import actions from './actions';

const {
  SINGLE_INCOME_BEGIN,
  SINGLE_INCOME_SUCCESS,
  SINGLE_INCOME_ERR,

  FILTER_INCOME_BEGIN,
  FILTER_INCOME_SUCCESS,
  FILTER_INCOME_ERR,

  SORTING_INCOME_BEGIN,
  SORTING_INCOME_SUCCESS,
  SORTING_INCOME_ERR,

  GET_INCOME_BEGIN,
  GET_INCOME_SUCCESS,
  GET_INCOME_ERROR,

  SEARCH_INCOME_BEGIN,
  SEARCH_INCOME_SUCCESS,
  SEARCH_INCOME_ERROR,
} = actions;

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const SingleIncomeReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_INCOME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SINGLE_INCOME_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case GET_INCOME_BEGIN:
      return {
        ...state,
        loading: false,
      };
    case GET_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_INCOME_ERROR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case SEARCH_INCOME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SEARCH_INCOME_ERROR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case FILTER_INCOME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case FILTER_INCOME_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case SORTING_INCOME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SORTING_INCOME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SORTING_INCOME_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleIncomeReducer };
