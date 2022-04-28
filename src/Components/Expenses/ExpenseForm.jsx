import React from "react";

export default function ExpenseForm(props) {
  return (
    <div className="expense-form__wrapper">
      <h2 className="expense-form__title">Add New Expense</h2>
      <form className="expense-form" onSubmit={props.onSubmitExpenseForm}>
        <div className="expense-field__wrapper">
          <label htmlFor="expense-name" className="expense-field__label">
            Name
          </label>
          <input
            type="text"
            name="expense-name"
            id="expense-name"
            className="expense-field"
            value={props.name}
            onChange={props.onExpenseNameHandler}
          />
        </div>
        <div className="expense-field__wrapper">
          <label htmlFor="expense-cost" className="expense-field__label">
            Cost
          </label>
          <input
            type="number"
            name="expense-cost"
            id="expense-cost"
            className="expense-field"
            value={props.cost}
            onChange={props.onExpenseCostHandler}
          />
        </div>
        <div className="expense-field__wrapper">
          <label htmlFor="expense-date" className="expense-field__label">
            Date
          </label>
          <input
            type="date"
            name="expense-date"
            id="expense-date"
            className="expense-field"
            value={props.date}
            onChange={props.onExpenseDateHandler}
          />
        </div>
        <div className="expense-buttons__wrapper">
          <button type="submit" name="add-expense-btn" id="add-expense-btn">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
