import React from "react";
import Budget from "./Budget";
import Remaining from "./Remaining";
import TotalExpenses from "./TotalExpenses";

export default function BudgetWrapper(props) {
  return (
    <div className="budget-wrapper">
      <Budget
        addBudget={props.addBudget}
        mainTotalBudget={props.budget}
        onBudgetIsEditing={props.edit}
        budgetIsEditingField={props.isEditing}
      />
      <Remaining mainRemainingBudget={props.remBudget} />
      <TotalExpenses mainTotalExpenses={props.expenses} />
    </div>
  );
}
