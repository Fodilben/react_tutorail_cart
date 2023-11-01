import { FaLaptopHouse } from "react-icons/fa";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./var";
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(action.payload.id, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item.amount === 1) {
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(action.payload.id, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    console.log(action.payload);
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { loading: false, cart: newCart };
  }
  throw new Error(`there is no matching with ${action.type}`);
};
export default reducer;
