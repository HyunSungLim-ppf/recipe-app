import React from 'react'
import './Food.css'
const Food = (props) => {
  return (
    <div className='food_container'>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Food
