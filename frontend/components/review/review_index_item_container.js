import { connect } from 'react-redux';
import { receiveErrors } from '../../actions/review_actions';
import ReviewIndexItem from './review_index_item';

const mSTP = state => ({
  errors: state.errors.review
});

const mDTP = dispatch => ({
  deleteErrors: errors => dispatch(receiveErrors(errors)),
});

export default connect(mSTP, mDTP)(ReviewIndexItem);