import { combineReducers } from 'redux';

import sessionErrorsReducer from "./session_errors_reducer";
import ReviewErrorsReducer from './reviews_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  review: ReviewErrorsReducer
});

export default errorsReducer;