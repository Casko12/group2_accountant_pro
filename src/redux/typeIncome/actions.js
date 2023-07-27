const actions = {
  SINGLE_TYPE_INCOME_BEGIN: 'SINGLE_TYPE_INCOME_BEGIN',
  SINGLE_TYPE_INCOME_SUCCESS: 'SINGLE_TYPE_INCOME_SUCCESS',
  SINGLE_TYPE_INCOME_ERR: 'SINGLE_TYPE_INCOME_ERR',

  FILTER_TYPE_INCOME_BEGIN: 'FILTER_TYPE_INCOME_BEGIN',
  FILTER_TYPE_INCOME_SUCCESS: 'FILTER_TYPE_INCOME_SUCCESS',
  FILTER_TYPE_INCOME_ERR: 'FILTER_TYPE_INCOME_ERR',

  SORTING_TYPE_INCOME_BEGIN: 'SORTING_TYPE_INCOME_BEGIN',
  SORTING_TYPE_INCOME_SUCCESS: 'SORTING_TYPE_INCOME_SUCCESS',
  SORTING_TYPE_INCOME_ERR: 'SORTING_TYPE_INCOME_ERR',

  singleTypeIncomeBegin: () => {
    return {
      type: actions.SINGLE_TYPE_INCOME_BEGIN,
    };
  },

  singleTypeIncomeSuccess: (data) => {
    return {
      type: actions.SINGLE_TYPE_INCOME_SUCCESS,
      data,
    };
  },

  singleTypeIncometErr: (err) => {
    return {
      type: actions.SINGLE_TYPE_INCOME_ERR,
      err,
    };
  },

  filterTypeIncomeBegin: () => {
    return {
      type: actions.FILTER_TYPE_INCOME_BEGIN,
    };
  },

  filterTypeIncomeSuccess: (data) => {
    return {
      type: actions.FILTER_TYPE_INCOME_SUCCESS,
      data,
    };
  },

  filterTypeIncomeErr: (err) => {
    return {
      type: actions.FILTER_TYPE_INCOME_ERR,
      err,
    };
  },

  sortingTypeIncomeBegin: () => {
    return {
      type: actions.SORTING_TYPE_INCOME_BEGIN,
    };
  },

  sortingTypeIncomeSuccess: (data) => {
    return {
      type: actions.SORTING_TYPE_INCOME_SUCCESS,
      data,
    };
  },

  sortingTypeIncomeErr: (err) => {
    return {
      type: actions.SORTING_TYPE_INCOME_ERR,
      err,
    };
  },
};

export default actions;
