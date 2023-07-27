import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Expense = lazy(() => import('../../container/expense/Expense'));
const ExpenseDetails = lazy(() => import('../../container/expense/ExpenseDetails'));
const ExpenseCreate = lazy(() => import('../../container/expense/ExpenseCreate'));

function ExpenseRoutes() {
  return (
    <Routes>
      <Route path="expenseDetails/:id/*" element={<ExpenseDetails />} />
      <Route path="view/*" element={<Expense />} />
      <Route path="create/*" element={<ExpenseCreate />} />
    </Routes>
  );
}

export default ExpenseRoutes;
