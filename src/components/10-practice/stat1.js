import React from 'react'

const Stat1 = (props) => {
  return (
    <div>
        <h2>{props.stat}</h2>
        <span>{props.title}</span>
    </div>
  )
}

export default Stat1