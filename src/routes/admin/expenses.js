import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Expense = lazy(() => import('../../container/expense/Expense'));
const ExpenseDetails = lazy(() => import('../../container/expense/ExpenseDetails'));
const ExpenseCreate = lazy(() => import('../../container/expense/ExpenseCreate'));
const NotFound = lazy(() => import('../../container/pages/404'));

function ExpenseRoutes() {
  return (
    <Routes>
      <Route path="expenseDetails/:id/*" element={<ExpenseDetails />} />
      <Route path="view/*" element={<Expense />} />
      <Route path="create/*" element={<ExpenseCreate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ExpenseRoutes;
