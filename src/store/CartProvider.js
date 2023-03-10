import React, { useReducer } from 'react';
import CartContext from './cart-context';

/**
 * Default state yang akan kita manage dengan useReducer
 */
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

/**
 *
 * Function yang akan mengeksekusi dispatch
 */
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    // let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //   updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    // updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // if remove
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  /**
   * state menggunakan reducer
   * @var cartState Array variable untuk menampung snapshot state data terakhir
   * @var dispatchCartAction Array variable function yang nantinya akan digunakan untuk mendispatch state guna mengambil data
   * @param cartReducer Function to run the dispatched
   * @return defaultCartState Object data for initial state
   */
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    /**
     * Ketika fungsi ini dijalankan, maka kita akan jalankan dispatch
     * dengan mengirim paremeter type untuk dideteksi dan mengirim item yang berisi item object data
     * @param type type yang akan di ekseskusi
     * @param item Object data
     */
    dispatchCartAction({ type: 'ADD', item: item });
  };

  /**
   *
   * @param id id from object item
   * @description this function to remove item from cart
   */
  const removeItemFromCartHandler = (id) => {
    /**
     * Ketika fungsi ini dijalankan, maka akan menjalankan dispatch dengan menggunakan type sebagai idetifier
     * @param type type yang akan dieksekusi
     * @param id id dari item data
     */
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
