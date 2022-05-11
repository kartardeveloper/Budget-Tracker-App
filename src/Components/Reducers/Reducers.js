import { combineReducers } from "redux";
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

export const initialState = {
  mainBudget: {
    total: 2000,
    isEditing: false,
    remaining: 2000,
    expensesCost: [0],
  },
  singleExpense: {
    title: "",
    expenseDate: new Date(),
    cost: "",
  },
  expenses: [],
};

const myTotalBudgetReducer = (state = initialState.mainBudget, action) => {
  switch (action.type) {
    case MY_TOTAL_BUDGET:
      return action.payload;
    case MY_TOTAL_BUDGET_IS_EDITING:
      return action.payload;
    case SET_TOTAL_EXPENSES_COST:
      return {
        ...state,
        expensesCost: [...state.expensesCost, action.payload],
      };
    default:
      return state;
  }
};

const myNewExpenseReducer = (state = initialState.singleExpense, action) => {
  switch (action.type) {
    case SET_EXPENSE_NAME:
      return { ...state, title: action.payload };
    case SET_EXPENSE_COST:
      return { ...state, cost: action.payload };
    case SET_EXPENSE_DATE:
      return { ...state, expenseDate: action.payload };
    case CLEAR_FIELDS:
      return action.payload;
    default:
      return state;
  }
};

const expenseListReducer = (state = initialState.expenses, action) => {
  switch (action.type) {
    case ADD_EXPENSE_IN_EXPENSE_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  myTotalBudgetReducer,
  myNewExpenseReducer,
  expenseListReducer,
});
