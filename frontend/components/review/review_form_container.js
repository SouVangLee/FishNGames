import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = state => ({
  currentUser: state.session.currentUserId,
  // errors: state.errors.review,
  // reviews: state.entities.reviews
});

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  deleteErrors: errors => dispatch(receiveErrors(errors)),
});

export default connect(mSTP, mDTP)(ReviewForm);