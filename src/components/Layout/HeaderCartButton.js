import React, { useState } from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    //   akhirnya disini menggunakan fungsi onClick dari button, ketika di klik, maka menjalankan fungsi yg ada di parent, yaitu onClick
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
