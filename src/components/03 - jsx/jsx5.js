import React from 'react'

const Jsx5 = () => {

    const names = ["Ali","Veli","Ayşe","Fatma"];
    const cities = ["istanbul","izmir","londra","paris"];

  return (
    <div>

        <ul>
            {names.map((x,i) => <li key={i}>{x}</li>)}
        </ul>

        <select name="" id="">
          {cities.map((x,i) => <option key={i}>{x}</option>)}
        </select>

    </div>
  )
}

export default Jsx5