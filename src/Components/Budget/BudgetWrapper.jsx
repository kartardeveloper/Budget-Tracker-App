import React from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
import TotalExpenses from './TotalExpenses';

export default function BudgetWrapper() {
  return (
    <div className='budget-wrapper'>
      <Budget />
      <Remaining />
      <TotalExpenses />
    </div>
  )
}
