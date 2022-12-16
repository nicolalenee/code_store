import React from "react";
import "../../src/index.css";
import { Inventory } from "../features/inventory/Inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.js";
// Import the Cart component here.
import { Cart } from "../features/cart/Cart";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";

// Render the Cart component below <Inventory />
export const App = (props) => {
  const { state, dispatch } = props;
  const visibleInventory = getFilteredItems(state.inventory, state.searchTerm);
  return (
    <div>
      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={visibleInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
/* filter utility function */
function getFilteredItems(items, searchTerm) {
  return items.filter((items) =>
    items.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
