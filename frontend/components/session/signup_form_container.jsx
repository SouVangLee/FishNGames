import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session
});

const mDTP = () => dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  deleteErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mSTP, mDTP)(SignupForm);