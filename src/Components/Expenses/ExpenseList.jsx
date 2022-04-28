import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  return (
    <div className="expense-list">
      <h2 className="expense-list__title">Expenses List</h2>
      <ul>
        {props.data.map((expense) => (
          <ExpenseItem
            name={expense.name}
            cost={expense.cost}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </ul>
    </div>
  );
}
