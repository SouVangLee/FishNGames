import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewer_id: this.props.currentUser,
      comment: "",
      rating: "",
      product_id: "",
      showEditForm: false,
      editComment: false
    }
  }

  clickEdit() {
    $(".review-edit-button").addClass("hide");
    $(".bottom-review-buttons").removeClass("flex-edit-button");
    $(".review-cancel-button").removeClass("hide");
    $(".review-update-button").removeClass("hide");
    $(".review-delete-button").removeClass("hide");
    this.setState({editComment: true});
  }

  hideButtons() {
    $(".review-edit-button").removeClass("hide");
    $(".bottom-review-buttons").addClass("flex-edit-button");
    $(".review-cancel-button").addClass("hide");
    $(".review-update-button").addClass("hide");
    $(".review-delete-button").addClass("hide");
  }

  clickDelete() {
    this.props.deleteReview(this.props.review.id);
    this.hideButtons();
  }

  clickUpdate() {
    this.props.updateReview()
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    // console.log("REVIEW INDEX ITEM", this.props);
    const { comment, name, rating, createdAt, reviewerId } = this.props.review;
    const date = createdAt.slice(0, 10);
    return (
      <div className="review-item-container">

        <nav className="review-item-nav">
          <div className="name-rating-container">
            <h2>{name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {date}</h2>
            <h3 className="rating">Rating: &nbsp;&nbsp;&nbsp;&nbsp;{rating} Stars</h3>
          </div>

          
        </nav>

          <div className="p-buttons-container">
            <p>{comment}</p>

            { (this.props.currentUserId === reviewerId) ? (
            <div className="bottom-review-buttons flex-edit-button">
              <button 
                className='review-edit-button'
                onClick={() => this.clickEdit()}
              >Edit Review</button>

              <button 
                className='review-cancel-button hide'
                onClick={() => this.hideButtons()}
              >Cancel</button>

              <button 
                className="review-delete-button hide"
                onClick={() => this.clickDelete()}
              >Delete</button>

              {/* <button 
                className="review-update-button hide"
                onClick={() => this.clickUpdate()}
              >Update</button> */}
            </div> ) : ""
            }
          </div>
      </div>
    );
  }

}

export default ReviewItem;