import React from "react";
import { useSelector } from "react-redux";

export default function TotalExpenses() {
  const myExpensesCost = useSelector(
    (state) => state.myTotalBudgetReducer.expensesCost
  );

  var sumOfExpensesCost = 0;

  for (let i in myExpensesCost) {
    sumOfExpensesCost += myExpensesCost[i];
  }

  return (
    <div className="budget__inner-box">
      <p className="box-title">
        Total expense :{" "}
        <span className="total-budget">{sumOfExpensesCost}</span>
        Rs.
      </p>
    </div>
  );
}
