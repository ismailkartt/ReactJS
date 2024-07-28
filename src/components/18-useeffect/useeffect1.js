import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const UseEffect1 = ({id}) => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    console.log(`Bu satır render ve re-render durumlarında ve alttaki return
         kısmı render edilmeden önce çalıştırılır`);

    useEffect(() => {
        console.log(`MOUINTING: Bu satır sadece  render durumunda çalışır.
                    ancak re-render'larda çalışmaz`)

          return () => {
            console.log(`
              UNMOINTING: Bu bölüm component hafızadan atılmadan hemen önce çalıştırılır
              `)
          }

    }, [])

    useEffect(() => {
        console.log(`UPDATING: Bu satır render ve re-render durumlarında ve alttaki return
            kısmı render edildikten sonra çalıştırılır
            bu useEffect özellikle alttaki elementlere useRef ile erişmek için kullanılır`);
    })

    useEffect(() => {
        console.log(`
            UPDATING: Bu bölümdeki kodlar alttaraftaki yazılan
             dependency lerin (message,id) değişmesi durumunda çalışır`)
    }, [message,id])

  return (
    <div>
        <div>{message}-{error}</div>
        <Button variant='info' onClick={() => setMessage("Hello")}>Set Message</Button>
        <Button variant='danger' onClick={() => setError("Some errors")}>Throw Error</Button>
    </div>
  )
}

export default UseEffect1