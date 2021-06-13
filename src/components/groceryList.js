import React from "react";
import List from "./List";

class groceryList extends React.Component {
  constructor(addToList) {
    super(addToList);
    this.state = {
      groceryItems: [
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
export default groceryList;
