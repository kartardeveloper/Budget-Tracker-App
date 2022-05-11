import {
  MY_TOTAL_BUDGET,
  MY_TOTAL_BUDGET_IS_EDITING,
  SET_TOTAL_EXPENSES_COST,
  SET_EXPENSE_NAME,
  SET_EXPENSE_COST,
  SET_EXPENSE_DATE,
  ADD_EXPENSE_IN_EXPENSE_LIST,
  CLEAR_FIELDS,
} from "../Constants/Constants";

// ACTION FOR TOTAL BUDGET
export const myTotalBudget = (e, mainBudget) => {
  if (e.key === "Enter") {
    return {
      type: MY_TOTAL_BUDGET,
      payload: {
        ...mainBudget,
        total: Number(e.target.value),
        isEditing: false,
        remaining: Number(e.target.value),
      },
    };
  } else {
    return {
      type: MY_TOTAL_BUDGET,
      payload: {
        ...mainBudget,
        total: Number(e.target.value),
        isEditing: true,
      },
    };
  }
};

// ACTION FOR BUDGET IS EDITING
export const isBudgetEditing = (mainBudget) => {
  return {
    type: MY_TOTAL_BUDGET_IS_EDITING,
    payload: {
      ...mainBudget,
      isEditing: true,
    },
  };
};

// ACTION FOR ADD NAME OF NEW EXPENSE
export const addNewExpenseName = (e) => {
  return {
    type: SET_EXPENSE_NAME,
    payload: e.target.value,
  };
};

// ACTION FOR ADD COST OF NEW EXPENSE
export const addNewExpenseCost = (e) => {
  return {
    type: SET_EXPENSE_COST,
    payload: e.target.value,
  };
};

// ACTION FOR SET TOTAL EXPENSE COST BUDGET
export const setTotalExpensesCost = (myNewExpense) => {
  return {
    type: SET_TOTAL_EXPENSES_COST,
    payload: Number(myNewExpense.cost),
  };
};

// ACTION FOR ADD DATE OF NEW EXPENSE
export const addNewExpenseDate = (e) => {
  return {
    type: SET_EXPENSE_DATE,
    payload: e.target.value,
  };
};

// ACTION FOR ADD NEW EXPENSE IN EXPENSE LIST
export const addNewExpenseInExpenseList = (e, myNewExpense) => {
  e.preventDefault();
  return {
    type: ADD_EXPENSE_IN_EXPENSE_LIST,
    payload: myNewExpense,
  };
};

// ACTION FOR CLEAR FIELDS
export const clearFields = () => {
  return {
    type: CLEAR_FIELDS,
    payload: {
      title: "",
      expenseDate: new Date(),
      cost: "",
    },
  };
};
