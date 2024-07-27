import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
   
    const [counter, setCounter] = useState(0);

    const handleClick = (val) => {
        if(val<0){
          val=0;
        } 
        setCounter(val);
    }
  
    return (
      <ButtonGroup>
        <Button variant="info" onClick={() => handleClick(counter - 1)}><FaMinusCircle /></Button>
        <Button variant="light" disabled>{counter}</Button>
        <Button variant="warning" onClick={() => handleClick(counter + 1)}><FaPlusCircle/></Button>
        <Button variant="danger" onClick={() => handleClick(0)} disabled={counter===0}><GrPowerReset/></Button>
      </ButtonGroup>
    );
  }


export default Counter;
