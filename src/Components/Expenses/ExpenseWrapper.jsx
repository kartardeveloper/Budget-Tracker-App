import React from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseWrapper(props) {
  return (
    <div className="expense__main-wrapper">
      <ExpenseForm
        onExpenseNameHandler={props.mainExpenseNameHandler}
        onExpenseCostHandler={props.mainExpenseCostHandler}
        onExpenseDateHandler={props.mainExpenseDateHandler}
        onSubmitExpenseForm={props.mainSubmitExpenseForm}
        name={props.name}
        cost={props.cost}
        date={props.date}
      />
      <ExpenseList data={props.data} />
    </div>
  );
}
