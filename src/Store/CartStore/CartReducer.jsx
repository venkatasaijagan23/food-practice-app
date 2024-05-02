const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItems = [...state.items];
      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, items: updatedItems };
    }
    case "REMOVE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];

      const updatedItems = [...state.items];
      if (existingItem.quantity === 1) {
        updatedItems.splice(existingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      }
      return { ...state, items: updatedItems };
    }
  }
}

export default CartReducer;
