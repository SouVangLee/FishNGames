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
    let productReviews = this.props.reviews.filter((review) => (
      review.productId === this.props.product_id
    ));

    const reviewList = productReviews.map((review, index) => (
     <ReviewItem key={index} review={review}/>
    ));

    return (
      <div className="review-index">
        <div className="reviews">Reviews</div>
        <ul className="review-index-container">
        {reviewList}
        </ul>
      </div>
    );
  }
}

export default Review;