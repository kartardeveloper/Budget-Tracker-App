import React from "react";
import { useSelector } from "react-redux";

export default function Remaining() {
  const myTotalBudgetObject = useSelector(
    (state) => state.myTotalBudgetReducer
  );

  const myBudget = myTotalBudgetObject.total;
  const myExpensesCost = myTotalBudgetObject.expensesCost;

  var remainingBudget = myBudget;

  for (let i in myExpensesCost) {
    remainingBudget -= myExpensesCost[i];
  }

  return (
    <div className="budget__inner-box">
      <p className="box-title">
        Remaining : <span className="total-budget">{remainingBudget}</span>Rs.
      </p>
    </div>
  );
}
