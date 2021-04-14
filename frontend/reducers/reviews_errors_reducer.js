import { RECEIVE_ERRORS } from '../actions/review_actions';

const ReviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    default:
      return state;
  }
};

export default ReviewErrorsReducer;