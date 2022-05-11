import React from "react";
import { store } from "../../Store";
import { useSelector } from "react-redux";

import { myTotalBudget, isBudgetEditing } from "../Actions/MainActions";
import { initialState } from "../Reducers/Reducers";

import Edit from "../../Assets/Images/edit.png";

export default function Budget() {
  const mainState = useSelector((state) => state);

  return (
    <div className="budget__inner-box">
      {!mainState.myTotalBudgetReducer.isEditing ? (
        <div className="budget-title-box main-budget-box">
          <p className="box-title">
            Budget :{" "}
            <span className="total-budget">
              {mainState.myTotalBudgetReducer.total}
            </span>
            Rs.
          </p>
          <button
            type="button"
            className="icon-wrapper"
            onClick={() =>
              store.dispatch(isBudgetEditing(initialState.mainBudget))
            }
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
          onKeyUp={(e) =>
            store.dispatch(myTotalBudget(e, initialState.mainBudget))
          }
        ></input>
      )}
    </div>
  );
}
