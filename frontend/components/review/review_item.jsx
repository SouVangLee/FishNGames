import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment, name, rating, createdAt } = this.props;
    return (
      <div>
        <div className="review-info">
          <h2>{name}</h2>
          <h3>{createdAt}</h3>
          <h3>{rating}</h3>
          <p>{comment}</p>
        </div>
      </div>
    );
  }

}

export default ReviewItem;