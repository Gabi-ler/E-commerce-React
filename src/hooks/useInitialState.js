import { useState } from 'react';

const initialState = {
    cart: []
}

const UseInitialState = () => {
   const [state, setstate] = useState(initialState);

   const addToCart = (loadProduct) => {
    setstate({
        ...state,
        cart: [ ...state.cart, loadProduct]
    })
   }

   const removeFromCart = (deleteProduct) => {
    setstate({
        ...state,
        cart: [...state.cart.filter(items => items.id !== deleteProduct.id)]
    })
   }
   return {
    state,
    addToCart,
    removeFromCart
   }
}

export default UseInitialState;
