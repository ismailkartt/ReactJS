import React from 'react'

const Events = () => {

    const sayHello1 = () => { 
        alert("Hello")
     };

     const sayHello2 = (name) => { 
      alert(`Hello ${name}`)
   };

  return (
    <div>
      {/* Event handler parametresiz çağırılırsa aşağıdaki gibi fonksiyon kullanmadan çağırılabilir */}
        <div onClick={sayHello1}>Say Hello</div>
        {/* Event handler parametre gönderilecekse aşağıdaki gibi fonksiyon kullanmak gerekir */}
        <div onClick={() => sayHello2("Ali")}>Say Hello</div>
    </div>
  )
}

export default Events