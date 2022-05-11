import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../Store";
import {
  setTotalExpensesCost,
  addNewExpenseName,
  addNewExpenseCost,
  addNewExpenseDate,
  addNewExpenseInExpenseList,
  clearFields,
} from "../Actions/MainActions";

const dispatchTwoActions = (e, newExpenseState) => {
  return (
    store.dispatch(
      addNewExpenseInExpenseList(e, newExpenseState.myNewExpenseReducer)
    ),
    store.dispatch(clearFields()),
    store.dispatch(setTotalExpensesCost(newExpenseState.myNewExpenseReducer))
  );
};

export default function ExpenseForm() {
  const newExpenseState = useSelector((state) => state);
  return (
    <div className="expense-form__wrapper">
      <h2 className="expense-form__title">Add New Expense</h2>
      <form
        className="expense-form"
        onSubmit={(e) => dispatchTwoActions(e, newExpenseState)}
      >
        <div className="expense-field__wrapper">
          <label htmlFor="expense-name" className="expense-field__label">
            Name
          </label>
          <input
            type="text"
            name="expense-name"
            id="expense-name"
            className="expense-field"
            value={newExpenseState.myNewExpenseReducer.title}
            onChange={(e) => store.dispatch(addNewExpenseName(e))}
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
            value={newExpenseState.myNewExpenseReducer.cost}
            onChange={(e) => store.dispatch(addNewExpenseCost(e))}
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
            value={newExpenseState.myNewExpenseReducer.expenseDate}
            onChange={(e) => store.dispatch(addNewExpenseDate(e))}
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
