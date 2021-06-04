import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ItemToCartContainer from '../cart_item/item_to_cart_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch(modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'addItemToCart':
      component= <ItemToCartContainer />;
      break;
    default:
      return null;  
  }

  return (
    <div className="modal-background" onClick={closeModal}>
        {component}
    </div>
  );
}

export default Modal;