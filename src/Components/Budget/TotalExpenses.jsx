import React from 'react'

export default function TotalExpenses(props) {
  return (
    <div className='budget__inner-box'>
        <p className="box-title">Total expense : <span className='total-budget'>{props.mainTotalExpenses}</span>Rs.</p>
    </div>
  )
}
