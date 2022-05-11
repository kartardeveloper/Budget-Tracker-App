import React from "react";

export default function ExpenseDate(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getLongMonthName = function (date) {
    return monthNames[date.getMonth()];
  };

  return (
    <div className="expense-item__date-wrapper">
      <p className="expense-item__month">{getLongMonthName(props.date)}</p>
      <p className="expense-item__year">{props.date.getFullYear()}</p>
      <p className="expense-item__date">{props.date.getDate()}</p>
    </div>
  );
}
