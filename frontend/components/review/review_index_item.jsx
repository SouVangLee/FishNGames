import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  clickEdit() {
    $(".review-edit-button").addClass("hide");
    $(".bottom-review-buttons").removeClass("flex-edit-button");
    $(".review-cancel-button").removeClass("hide");
    $(".review-update-button").removeClass("hide");
    $(".review-delete-button").removeClass("hide");
  }

  clickCancel() {
    $(".review-edit-button").removeClass("hide");
    $(".bottom-review-buttons").addClass("flex-edit-button");
    $(".review-cancel-button").addClass("hide");
    $(".review-update-button").addClass("hide");
    $(".review-delete-button").addClass("hide");
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
            <div className="bottom-review-buttons flex-edit-button">
              <button 
                className='review-edit-button'
                onClick={() => this.clickEdit()}
              >Edit</button>

              <button 
                className='review-cancel-button hide'
                onClick={() => this.clickCancel()}
              >Cancel</button>

              <button 
                className="review-delete-button hide"
              >Delete</button>

              <button 
                className="review-update-button hide"
              >Update</button>
            </div> ) : ""
            }

          </div>
      </div>
    );
  }

}

export default ReviewItem;