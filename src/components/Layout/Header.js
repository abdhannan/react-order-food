import React from 'react';

import mealsImage from '../../assets/meals.jpeg';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* Disini kita setup lagi parameter buat HeaderCartButton dan mengirim namaFUngsi ke component HeaderCartButton */}
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A top bar food banner' />
      </div>
    </React.Fragment>
  );
};

export default Header;
