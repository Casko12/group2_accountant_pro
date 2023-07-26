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
