import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment, name, rating, createdAt } = this.props.review;
    const date = createdAt.slice(0, 10);
    return (
      <div className="review-item-container">
        <nav className="review-item-nav">
          <div className="name-rating-container">
            <h2>{name}&nbsp;&nbsp;{date}</h2>
            <h3 className="rating">Rating: {rating} Stars</h3>
          </div>

          {/* <div className="delete-container"> */}
            <button className="delete-review-button">Delete</button>
          {/* </div> */}
        </nav>

          <div className="p-buttons-container">
            <p>{comment}</p>
            <div className="bottom-review-buttons">
              <button className="edit-review-button">Edit</button>
              <button className="cancel-edit-button">Cancel</button>
            </div>
          </div>
      </div>
    );
  }

}

export default ReviewItem;