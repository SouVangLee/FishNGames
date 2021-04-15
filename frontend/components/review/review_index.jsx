import React from 'react';
import ReviewItem from './review_index_item';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllReviews();
  }

  render() {
    console.log("props", this.props);
    let productReviews = this.props.reviews.filter((review) => (
      review.productId === this.props.product_id
    ));

    const reviewList = productReviews.map((review, index) => (
     <li key={index}><ReviewItem  review={review}/> </li>
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