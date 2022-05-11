import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <li className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-title">{props.title}</h2>
      <p className="expense-cost__wrapper">
        <span className="expense-cost">{props.cost}</span>Rs.
      </p>
    </li>
  );
}
