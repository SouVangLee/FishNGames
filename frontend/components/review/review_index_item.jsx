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
            <h2>{name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {date}</h2>
            <h3 className="rating">Rating: {rating} Stars</h3>
          </div>

          
        </nav>

          <div className="p-buttons-container">
            <p>{comment}</p>
            <button className="delete-review-button">Delete</button>
            <div className="bottom-review-buttons">
              <button className='review-edit-button review-cancel-button'>Edit/Cancel</button>
              <button className="review-update-button">Update</button>
            </div>
          </div>
      </div>
    );
  }

}

export default ReviewItem;