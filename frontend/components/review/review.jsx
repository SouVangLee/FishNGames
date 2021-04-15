import React from 'react';
import ReviewItem from './review_item';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllReviews();
  }

  render() {
    let productReviews = this.props.reviews.filter((review) => (
      review.productId === this.props.product_id
    ));

    const reviewList = productReviews.map((review, index) => (
     <ReviewItem key={index} review={review}/>
    ));

    return (
      <div>
        <ul>
        {reviewList}
        </ul>
      </div>
    );
  }
}

export default Review;