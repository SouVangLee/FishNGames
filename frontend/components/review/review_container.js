import { connect } from 'react-redux';
import Review from './review_index';
import { 
  fetchAllReviews,
  updateReview, 
  deleteReview, 
  fetchReview
} from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
  fetchAllReviews: () => dispatch(fetchAllReviews()),
  openModal: modal => dispatch(openModal(modal)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId))
});

export default connect(mSTP, mDTP)(Review);