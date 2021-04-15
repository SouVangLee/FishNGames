import React from 'react';
import ReviewItem from './review_index_item';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllReviews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviews.length !== this.props.reviews.length) {
      this.props.fetchAllReviews();
    }
  }

  render() {
    console.log("IN REVIEW INDEX", this.props);
    let productReviews = this.props.reviews.filter((review) => (
      review.productId === this.props.product_id
    ));

    const reviewList = productReviews.map((review, index) => (
     <ReviewItem key={index} review={review}/>
    ));

    return (
      <div className="review-index">
        { !this.props.currentUserId ? 
        <div className="sign-in-alert">Please sign in to leave a review</div> : ""
        }

        <div classname="wall-border">filler</div>

        <div className="reviews">Reviews</div>
        <ul className="review-index-container">
        {reviewList}
        </ul>
      </div>
    );
  }
}

export default Review;