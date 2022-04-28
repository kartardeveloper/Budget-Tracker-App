import React, { useState } from "react";
import BudgetWrapper from "../Budget/BudgetWrapper";
import ExpenseWrapper from "../Expenses/ExpenseWrapper";

export default function Main() {
  // Expense States
  const [expenseData, setExpenseData] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [expenseDate, setExpenseDate] = useState(new Date());

  // Budget States
  const [totalBudget, setTotalBudget] = useState(2000);
  const [budgetIsEditing, setBudgetIsEditing] = useState(false);
  const [remainingBudget, setRemainingBudget] = useState(totalBudget);
  const [totalExpenses, setTotalExpenses] = useState([]);
  const [totalExpensesCost, setTotalExpensesCost] = useState(0);

  // Expense Functions
  const expenseNameHandler = (e) => {
    setExpenseName(e.target.value);
  };

  const expenseCostHandler = (e) => {
    setExpenseCost(e.target.value);
  };

  const expenseDateHandler = (e) => {
    setExpenseDate(e.target.value);
  };


  const submitExpenseForm = (e) => {
    e.preventDefault();
    const expense = {
      name: expenseName,
      cost: expenseCost,
      date: new Date(expenseDate),
      id: Math.random() + 100000000,
    };

    setExpenseData((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    setExpenseName("");
    setExpenseCost("");
    setExpenseDate(new Date());

    setTotalExpenses((prevState) => {
      return [expenseCost, ...prevState]
    })

    let expensesSum = 0;

    for(let i = 0; i < totalExpenses.length; i++) {
      expensesSum += Number(totalExpenses[i]);
    }

    setTotalExpensesCost(expensesSum)
    setRemainingBudget(Number(totalBudget) - totalExpensesCost)


  };

  // Budget Functions
  const onEditClickHandler = () => {
    setBudgetIsEditing(true);
  };

  const onAddBudget = (e) => {
    setTotalBudget(e.target.value);
    if (e.key === "Enter") {
      setBudgetIsEditing(false);
      setRemainingBudget(totalBudget);
    } else {
      setBudgetIsEditing(true);
    }
  };

  return (
    <main>
      <BudgetWrapper
        edit={onEditClickHandler}
        addBudget={onAddBudget}
        budget={totalBudget}
        isEditing={budgetIsEditing}
        remBudget={remainingBudget}
        expenses={totalExpensesCost}
      />
      <ExpenseWrapper
        mainExpenseNameHandler={expenseNameHandler}
        mainExpenseCostHandler={expenseCostHandler}
        mainExpenseDateHandler={expenseDateHandler}
        mainSubmitExpenseForm={submitExpenseForm}
        name={expenseName}
        cost={expenseCost}
        date={expenseDate}
        data={expenseData}
      />
    </main>
  );
}
