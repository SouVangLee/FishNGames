import * as ReviewApiUtil from '../util/review_utils';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchAllReviews = () => dispatch => (
  ReviewApiUtil.fetchAllReviews()
    .then(
      reviews => dispatch(receiveAllReviews(reviews)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const fetchReview = reviewId => dispatch => (
  ReviewApiUtil.fetchReview(reviewId)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const createReview = review => dispatch => (
  ReviewApiUtil.createReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const updateReview = review => dispatch => (
  ReviewApiUtil.updateReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const deleteReview = reviewId => dispatch => (
  ReviewApiUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
);