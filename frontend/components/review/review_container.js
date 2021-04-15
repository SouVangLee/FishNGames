import { connect } from 'react-redux';
import Review from './review_index';
import { fetchAllReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
  fetchAllReviews: () => dispatch(fetchAllReviews())
});

export default connect(mSTP, mDTP)(Review);