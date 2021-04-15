import { connect } from 'react-redux';
import Review from './review_index';
import { fetchAllReviews } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';
import { updateReview, deleteReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
  fetchAllReviews: () => dispatch(fetchAllReviews()),
  openModal: modal => dispatch(openModal(modal)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(Review);