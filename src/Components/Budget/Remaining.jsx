import React from "react";

export default function Remaining(props) {
  return (
    <div className="budget__inner-box">
      <p className="box-title">
        Remaining :{" "}
        <span className="total-budget">{props.mainRemainingBudget}</span>Rs.
      </p>
    </div>
  );
}
