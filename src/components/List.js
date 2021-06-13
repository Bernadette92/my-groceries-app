import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const groceryItems = this.state.groceryItems.map((groceryItem) => (
      <ListItem
        title={groceryItem.title}
        key={groceryItem.id}
        onClick={this.handleClick}
      />
    ));
    return (
      <div>
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default List;
