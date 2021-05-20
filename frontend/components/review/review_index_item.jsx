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

  showStars(rating) {
    let starArr = [];
    let i = 0;
    for (i; i < rating; i++) {
      let gold_star = ( <i className="fas fa-star show-gold-star" key={i}></i> )
      starArr.push(gold_star);
    }

    for (i; i < 5; i++) {
      let grey_star = ( <i className="fas fa-star show-grey-star" key={i}></i> )
      starArr.push(grey_star);
    }

    return starArr;
  }

  render() {
    const { header, comment, name, rating, createdAt, reviewerId } = this.props.review;
    const date = createdAt.slice(0, 10);
    let showStar = this.showStars(rating);

    return (
      <div className="review-item-container">

        <nav className="review-item-nav">
          <div className="name-rating-container">
            <span className="show-star-review">{showStar}</span>
            <span className="user-info">{name} </span>
            <span className="user-date">{date}</span>
          </div>
        </nav>

        <h2 className="review-header">{header}</h2>

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