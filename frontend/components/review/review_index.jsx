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
     <ReviewItem 
        key={index} 
        review={review} 
        currentUserId={this.props.currentUserId}
        updateReview={this.props.updateReview}
        deleteReview={this.props.deleteReview}
        fetchReview={this.props.fetchReview}
      />
    ));

    return (
      <div className="review-index">

        { !this.props.currentUserId ? 
          (<div className="sign-in-alert">
            <a 
              onClick={() => this.props.openModal('login')}
              >Please sign in to leave a review</a>
          </div>)  : ""
        }

        <div className="reviews">Reviews</div>
        <ul className="review-index-container">
        { reviewList }
        </ul>
      </div>
    );
  }
}

export default Review;