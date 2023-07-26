const actions = {
  SINGLE_EXPENSE_BEGIN: 'SINGLE_EXPENSE_BEGIN',
  SINGLE_EXPENSE_SUCCESS: 'SINGLE_EXPENSE_SUCCESS',
  SINGLE_EXPENSE_ERR: 'SINGLE_EXPENSE_ERR',

  FILTER_EXPENSE_BEGIN: 'FILTER_EXPENSE_BEGIN',
  FILTER_EXPENSE_SUCCESS: 'FILTER_EXPENSE_SUCCESS',
  FILTER_EXPENSE_ERR: 'FILTER_EXPENSE_ERR',

  SORTING_EXPENSE_BEGIN: 'SORTING_EXPENSE_BEGIN',
  SORTING_EXPENSE_SUCCESS: 'SORTING_EXPENSE_SUCCESS',
  SORTING_EXPENSE_ERR: 'SORTING_EXPENSE_ERR',

  singleExpenseBegin: () => {
    return {
      type: actions.SINGLE_EXPENSE_BEGIN,
    };
  },

  singleExpenseSuccess: (data) => {
    return {
      type: actions.SINGLE_EXPENSE_SUCCESS,
      data,
    };
  },

  singleExpensetErr: (err) => {
    return {
      type: actions.SINGLE_EXPENSE_ERR,
      err,
    };
  },

  filterExpenseBegin: () => {
    return {
      type: actions.FILTER_EXPENSE_BEGIN,
    };
  },

  filterExpenseSuccess: (data) => {
    return {
      type: actions.FILTER_EXPENSE_SUCCESS,
      data,
    };
  },

  filterExpenseErr: (err) => {
    return {
      type: actions.FILTER_EXPENSE_ERR,
      err,
    };
  },

  sortingExpenseBegin: () => {
    return {
      type: actions.SORTING_EXPENSE_BEGIN,
    };
  },

  sortingExpenseSuccess: (data) => {
    return {
      type: actions.SORTING_EXPENSE_SUCCESS,
      data,
    };
  },

  sortingExpenseErr: (err) => {
    return {
      type: actions.SORTING_EXPENSE_ERR,
      err,
    };
  },
};

export default actions;
