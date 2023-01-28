import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const setShownCartHandler = () => {
    setCartIsShown(true);
  };

  const setHideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onHideCart={setHideCartHandler} />}
      {/* function parameter untuk eksekusi function, function parameter ini di ambil dari Header.js */}
      <Header onShownCart={setShownCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
