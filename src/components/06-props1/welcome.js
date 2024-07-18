import React from 'react'
import "./welcome.scss";


const Welcome = ({firstName,lastName}) => {

    // const {firstName,lastName} = props;

  return (
    <div className='welcome'>
        <h2>Welcome {firstName} {lastName}</h2>
        

    </div>
  )
}

export default Welcome