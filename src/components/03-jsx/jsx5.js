import React from 'react'

const Jsx5 = () => {

    const names = ["Ali","Veli","Hasan","Mehmet"];
    const cities = ["Ankara", "İstanbul", "Bursa"];

  return (
    <div>
        <ul>
            { names.map((x,i) => <li key={i}>{x}</li>)}
        </ul>

        <select>
        {cities.map((city, i) => 
          <option key={i}>{city}</option>
        )}
      </select>


    </div>
  )
}

export default Jsx5