import React from 'react';

class ItemToCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ITEM TO CART PROPS", this.props);
    return (
      <div className="add-item-modal-child" onClick={e => e.stopPropagation()}>

      </div>
    )
  }
}

export default ItemToCart;