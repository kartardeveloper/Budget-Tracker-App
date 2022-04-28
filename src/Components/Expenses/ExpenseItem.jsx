import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <li className="expense-item">
      <ExpenseDate expDate={props.date} />
      <h2 className="expense-title">{props.name}</h2>
      <p className="expense-cost__wrapper">
        <span className="expense-cost">{props.cost}</span>Rs.
      </p>
    </li>
  );
}
