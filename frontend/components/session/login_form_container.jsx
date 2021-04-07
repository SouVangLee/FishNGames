import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";
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
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mSTP, mDTP)(LoginForm);