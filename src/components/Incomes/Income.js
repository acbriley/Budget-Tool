import React from 'react'

function Income(props) {

  console.log(props)
  return (
    <div className="itemGroup">
      <div className='item'>
        <p className='description'> {props.item.description} </p>
        <p className='value'> {props.item.amount}</p>
      </div>
    </div>
  )
}



export default Income
