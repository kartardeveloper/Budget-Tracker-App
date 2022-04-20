import React, { useState } from "react";

import Edit from "../../Assets/Images/edit.png";

export default function Budget() {
  const [budgetIsEditing, setBudgetIsEditing] = useState(false);
  const [totalBudget, setTotalBudget] = useState(2000);

  const onEditClickHandler = () => {
    setBudgetIsEditing(true);
  };

  const onAddBudget = (e) => {
    setTotalBudget(e.target.value);
    e.key === "Enter" ? setBudgetIsEditing(false) : setBudgetIsEditing(true);
  };

  return (
    <div className="budget__inner-box">
      {!budgetIsEditing ? (
        <div className="budget-title-box main-budget-box">
          <p className="box-title">
            Budget : <span className="total-budget">{totalBudget}</span>Rs.
          </p>
          <button
            type="button"
            className="icon-wrapper"
            onClick={onEditClickHandler}
          >
            <img src={Edit} alt="Edit" className="icon" />
          </button>
        </div>
      ) : (
        <textarea
          name="budget-edit__textarea"
          id="budget-edit__textarea"
          placeholder="Enter your budget"
          onKeyUp={onAddBudget}
        ></textarea>
      )}
    </div>
  );
}
