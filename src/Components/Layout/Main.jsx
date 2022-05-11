import React from "react";
import BudgetWrapper from "../Budget/BudgetWrapper";
import ExpenseWrapper from "../Expenses/ExpenseWrapper";

export default function Main() {
  return (
    <main>
      <BudgetWrapper />
      <ExpenseWrapper />
    </main>
  );
}
