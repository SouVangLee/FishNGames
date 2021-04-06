import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

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
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);