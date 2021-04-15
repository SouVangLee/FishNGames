import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.clickEdit = this.clickEdit.bind(this);
  }

  clickEdit() {

  }

  render() {
    console.log("REVIEW INDEX ITEM", this.props);
    const { comment, name, rating, createdAt, reviewerId } = this.props.review;
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


            { (this.props.currentUserId === reviewerId) ? (
            <div className="bottom-review-buttons">
              <button className='review-edit-button'>Edit</button>
              {/* <button className='review-cancel-button'>Cancel</button> */}

              <button className="review-delete-button">Delete</button>
              <button className="review-update-button">Update</button>
            </div> ) : ""
            }

          </div>
      </div>
    );
  }

}

export default ReviewItem;