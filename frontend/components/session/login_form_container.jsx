import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";
import React from 'react';

const mSTP = ({ errors }) => {
  return {
    formType: 'login',
    errors: errors.session
  }
}

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(SessionForm);