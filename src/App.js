import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App(props) {
  /**
   * State untuk manage modal cart
   *
   * @param state | boolean
   * @argument boolean
   * @returns
   */
  const [cartIsShown, setCartIsShown] = useState(false);

  /**
   * @description fungsi untuk nge-set state cartIsShown
   * @argument boolean
   * @returns cartIsShown | true | cart modal akan muncul
   */
  const setShownCartHandler = () => {
    setCartIsShown(true);
  };

  /**
   * @description Fungsi untuk nge-set state cartIsShown menjadi false dan menutup Cart Modal
   * @argument boolean | false
   * @returns cartIsShown | false | Hide cart modal
   */
  const setHideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={setHideCartHandler} />}
      {/* function parameter untuk eksekusi function, function parameter ini di ambil dari Header.js */}
      <Header onShownCart={setShownCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
