import { 
  RECEIVE_ERRORS, 
  RECEIVE_REVIEW 
} from '../actions/review_actions';

const ReviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return [];
    default:
      return state;
  }
};

export default ReviewErrorsReducer;