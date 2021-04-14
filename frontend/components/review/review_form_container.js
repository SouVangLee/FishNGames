import { connect } from 'react-redux';
import { createReview, fetchAllReviews } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = state => ({
  currentUser: state.session.currentUserId,
  errors: state.errors.review,
  formType: 'create'
});

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review))
  
});

export default connect(mSTP, mDTP)(ReviewForm);