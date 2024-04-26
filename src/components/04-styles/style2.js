import React from 'react'

const Style2 = () => {

    const styleTitle = {
        fontSize:"2rem",
        color:"red",
        fontWeight:"bold",
        textAlign:"center"
    }

  return (
    <div>
        <h2 style={styleTitle}>JSX Loops</h2>
        <p>SAPLDLKASKD ASŞLD ASŞD ŞALS DŞAS ŞKDAS DŞLASK ŞLDŞASDŞ</p>

        <h2 style={{...styleTitle,color:"blue"}}>Component Props</h2>
        <p>SAPLDLKASKD ASŞLD ASŞD ŞALS DŞAS ŞKDAS DŞLASK ŞLDŞASDŞ</p>

    </div>
  )
}

export default Style2