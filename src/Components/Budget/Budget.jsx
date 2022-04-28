import React from "react";

import Edit from "../../Assets/Images/edit.png";

export default function Budget(props) {
  return (
    <div className="budget__inner-box">
      {!props.budgetIsEditingField ? (
        <div className="budget-title-box main-budget-box">
          <p className="box-title">
            Budget :{" "}
            <span className="total-budget">{props.mainTotalBudget}</span>Rs.
          </p>
          <button
            type="button"
            className="icon-wrapper"
            onClick={props.onBudgetIsEditing}
          >
            <img src={Edit} alt="Edit" className="icon" />
          </button>
        </div>
      ) : (
        <input
          type="number"
          name="budget-edit__textarea"
          id="budget-edit__textarea"
          placeholder="Enter your budget"
          onKeyUp={props.addBudget}
        ></input>
      )}
    </div>
  );
}
