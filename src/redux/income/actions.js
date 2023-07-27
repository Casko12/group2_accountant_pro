const actions = {
  SINGLE_INCOME_BEGIN: 'SINGLE_INCOME_BEGIN',
  SINGLE_INCOME_SUCCESS: 'SINGLE_INCOME_SUCCESS',
  SINGLE_INCOME_ERR: 'SINGLE_INCOME_ERR',

  FILTER_INCOME_BEGIN: 'FILTER_INCOME_BEGIN',
  FILTER_INCOME_SUCCESS: 'FILTER_INCOME_SUCCESS',
  FILTER_INCOME_ERR: 'FILTER_INCOME_ERR',

  SORTING_INCOME_BEGIN: 'SORTING_INCOME_BEGIN',
  SORTING_INCOME_SUCCESS: 'SORTING_INCOME_SUCCESS',
  SORTING_INCOME_ERR: 'SORTING_INCOME_ERR',

  CREATE_INCOME_BEGIN: 'CREATE_INCOME_BEGIN',
  CREATE_INCOME_SUCCESS: 'CREATE_INCOME_SUCCESS',
  CREATE_INCOME_ERROR: 'CREATE_INCOME_ERROR',

  GET_INCOME_BEGIN: 'GET_INCOME_BEGIN',
  GET_INCOME_SUCCESS: 'GET_INCOME_SUCCESS',
  GET_INCOME_ERROR: 'GET_INCOME_ERROR',

  SEARCH_INCOME_BEGIN: 'SEARCH_INCOME_BEGIN',
  SEARCH_INCOME_SUCCESS: 'SEARCH_INCOME_SUCCESS',
  SEARCH_INCOME_ERROR: 'SEARCH_INCOME_ERROR',

  DELETE_INCOME_BEGIN: 'DELETE_INCOME_BEGIN',
  DELETE_INCOME_SUCCESS: 'DELETE_INCOME_SUCCESS',
  DELETE_INCOME_ERROR: 'DELETE_INCOME_ERROR',

  deleteIncomeBegin: () => {
    return {
      type: actions.DELETE_INCOME_BEGIN,
    };
  },
  deleteIncomeSucces: (data) => {
    return {
      type: actions.DELETE_INCOME_SUCCESS,
      data,
    };
  },
  deleteIncomeError: (err) => {
    return {
      type: actions.DELETE_INCOME_ERROR,
      err,
    };
  },

  searchIncomeBegin: () => {
    return {
      type: actions.SEARCH_INCOME_BEGIN,
    };
  },
  searchIncomeSucces: (data) => {
    return {
      type: actions.SEARCH_INCOME_SUCCESS,
      data,
    };
  },
  searchIncomeError: (err) => {
    return {
      type: actions.SEARCH_INCOME_ERROR,
      err,
    };
  },
  getIncomeBegin: () => {
    return {
      type: actions.GET_INCOME_BEGIN,
    };
  },
  getIncomeSucces: (data) => {
    return {
      type: actions.GET_INCOME_SUCCESS,
      data,
    };
  },
  getIncomeError: (err) => {
    return {
      type: actions.GET_INCOME_ERROR,
      err,
    };
  },
  createIncomeBegin: () => {
    return {
      type: actions.CREATE_INCOME_BEGIN,
    };
  },
  createIncomeSuccess: (data) => {
    return {
      type: actions.CREATE_INCOME_SUCCESS,
      data,
    };
  },
  createIncomeError: (err) => {
    return {
      type: actions.CREATE_INCOME_ERROR,
      err,
    };
  },
  singleIncomeBegin: () => {
    return {
      type: actions.SINGLE_INCOME_BEGIN,
    };
  },

  singleIncomeSuccess: (data) => {
    return {
      type: actions.SINGLE_INCOME_SUCCESS,
      data,
    };
  },

  singleIncometErr: (err) => {
    return {
      type: actions.SINGLE_INCOME_ERR,
      err,
    };
  },

  filterIncomeBegin: () => {
    return {
      type: actions.FILTER_INCOME_BEGIN,
    };
  },

  filterIncomeSuccess: (data) => {
    return {
      type: actions.FILTER_INCOME_SUCCESS,
      data,
    };
  },

  filterIncomeErr: (err) => {
    return {
      type: actions.FILTER_INCOME_ERR,
      err,
    };
  },

  sortingIncomeBegin: () => {
    return {
      type: actions.SORTING_INCOME_BEGIN,
    };
  },

  sortingIncomeSuccess: (data) => {
    return {
      type: actions.SORTING_INCOME_SUCCESS,
      data,
    };
  },

  sortingIncomeErr: (err) => {
    return {
      type: actions.SORTING_INCOME_ERR,
      err,
    };
  },
};

export default actions;
