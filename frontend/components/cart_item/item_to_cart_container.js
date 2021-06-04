import { connect } from 'react-redux';
import { closeModal } from "../../actions/modal_actions";
import ItemToCart from './item_to_cart';
import { withRouter } from 'react-router-dom';

const mSTP = state => {
  return {
    cartItems: Object.values(state.entities.cartItems)
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mSTP, mDTP)(ItemToCart));