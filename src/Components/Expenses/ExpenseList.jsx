import React from "react";
import { useSelector } from "react-redux";

import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const newExpenseState = useSelector((state) => state);

  return (
    <div className="expense-list">
      <h2 className="expense-list__title">Expenses List</h2>
      <ul>
        {newExpenseState.expenseListReducer.map((expense) => {
          return (
            <ExpenseItem
              key={Math.random() + 100000000}
              title={expense.title}
              cost={expense.cost}
              date={new Date(expense.expenseDate)}
            />
          );
        })}
      </ul>
    </div>
  );
}
