import React, { useContext } from 'react'
import "./topbar.scss";
import StoreContext from '../../store';

const TopBar = () => {
  const store = useContext(StoreContext);
  const { currencies } = store;

  const formatCurrencies = (val) => { 
      return (1 / currencies[val]).toFixed(2);
   }

  return (
    <header className='exchange'>
      <nav>
        <h3>Exchange</h3>
        <div>
          <span>$: {formatCurrencies("USD")}₺</span>
          <span>€: {formatCurrencies("EUR")}₺</span>
        </div>
      </nav>

    </header>    
  )
}

export default TopBar