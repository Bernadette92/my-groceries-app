import React from "react";
import GroceryList from "./components/groceryList";
import ShoppingCart from "./components/shoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      GroceryList: [
        { id: 1, title: "Pasta" },
        { id: 2, title: "Kaas" },
        { id: 3, title: "Paprika" },
        { id: 4, title: "Aubergine" },
        { id: 5, title: "tomaat" },
        { id: 6, title: "ui" },
        { id: 7, title: "Knoflook" },
      ],
      shoppingListItems: [
        { id: 1, title: "Pasta" },
        { id: 2, title: "Kaas" },
        { id: 3, title: "Paprika" },
        { id: 4, title: "Aubergine" },
        { id: 5, title: "tomaat" },
        { id: 6, title: "ui" },
        { id: 7, title: "Knoflook" },
      ],
    };
  }
}

export default Container;
