import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment, name, rating, createdAt } = this.props.review;
    const date = createdAt.slice(0, 10);
    return (
      <div className="review-item">
        <nav className="review-item-nav">
          <h2>{name}</h2>
          <h3>{date}</h3>
        </nav>
          <h3 className="rating">Rating: {rating} Stars</h3>
          <p>{comment}</p>

          {/* <button>Edit...</button> */}
      </div>
    );
  }

}

export default ReviewItem;