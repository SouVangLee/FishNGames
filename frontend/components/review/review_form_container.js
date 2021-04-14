import { connect } from 'react-redux';
import { createReview, fetchAllReviews } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUserId,
  errors: state.errors.review,
});

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm);