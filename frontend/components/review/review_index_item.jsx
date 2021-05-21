import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    const { header, comment, rating } = this.props.review;
    this.state = {
      header: header,
      comment: comment,
      rating: rating,
      showEditForm: false
    }

    this.handleStarClick = this.handleStarClick.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
    this.clickCancel = this.clickCancel.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.showEditReviewStars = this.showEditReviewStars.bind(this);
    this.showReviewStars = this.showReviewStars.bind(this)
  }

  clickEdit(e) {
    e.preventDefault();
    $(".review-edit-button").addClass("hide");
    this.setState({showEditForm: true});
  }

  clickDelete() {
    this.props.deleteReview(this.props.review.id);
    this.setState({ showEditForm: false});
    $(".review-edit-button").removeClass("hide");
  }

  clickCancel() {
    this.setState({showEditForm: false});
    $(".review-edit-button").removeClass("hide");
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleUpdate(e) {
    e.preventDefault();
    const { header, comment, rating } = this.state;
    const { reviewerId, productId, id} = this.props.review;
    let editReview = {
      reviewerId: reviewerId,
      productId: productId,
      header: header,
      comment: comment,
      rating: rating,
      id: id
    }
    this.props.updateReview(editReview);
    this.setState({ showEditForm: false});
  }

  handleStarClick(star_num) {
    return e => {
      e.preventDefault();
      this.setState({ rating: star_num });

      let star_div = document.getElementsByClassName("edit-form-star-div");
      let star_img = document.getElementsByClassName("edit-form-star");

      for (let i = 0; i < 5; i++) {
        if (i <= star_num - 1) {
          if (star_div[i].classList.contains("edit-not-active-background")) {
            star_div[i].classList.remove("edit-not-active-background");
          }
          if (!star_div[i].classList.contains("edit-active-background")) {
            star_div[i].classList.add("edit-active-background");
          }
          if (star_img[i].classList.contains("edit-not-active-star")) {
              star_img[i].classList.remove("edit-not-active-star")
          }
          if (!star_img[i].classList.contains("edit-active-star")) {
            star_img[i].classList.add("edit-active-star");
        }
        } else {
          if (star_div[i].classList.contains("edit-active-background")) {
            star_div[i].classList.remove("edit-active-background");
          }
          if (!star_div[i].classList.contains("edit-not-active-background")) {
            star_div[i].classList.add("edit-not-active-background");
          }
          if (star_img[i].classList.contains("edit-active-star")) {
            star_img[i].classList.remove("edit-active-star")
        }
          if (!star_img[i].classList.contains("edit-not-active-star")) {
              star_img[i].classList.add("edit-not-active-star")
          }
        }
      }
    }
  }

  showEditReviewStars(rating) {
    let starArr = [];
    let i = 0;
    for (i; i < rating; i++) {
      let gold_star = ( 
        <div 
          className="edit-active-background edit-form-star-div" 
          onClick={ this.handleStarClick(i + 1) }
          key={i}
        >
          <i className="fas fa-star edit-active-star edit-form-star" 
            key={i}>
          </i> 
        </div>
      );
      starArr.push(gold_star);
    }
    for (i; i < 5; i++) {
      let grey_star = ( 
        <div 
          className="edit-not-active-background edit-form-star-div"
          onClick={ this.handleStarClick(i + 1) }
          key={i}
        >
          <i className="fas fa-star edit-not-active-star edit-form-star" 
            key={i}>
          </i> 
        </div>
      );
      starArr.push(grey_star);
    }

    return starArr;
  }

  showReviewStars(rating) {
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

  editForm() {
    let showEditReviewStars = this.showEditReviewStars(this.state.rating);
    return (
      <div className="edit-review-item-container">
        <form onSubmit={this.handleUpdate}>
          <div className="edit-star-rating-container">
            {showEditReviewStars}
          </div>
          <div className="edit-review-header" >
            <input 
              type="text" 
              onChange={this.handleInput('header')} 
              value={this.state.header}
            />
          </div>
          <div className="edit-review-comment">
              <textarea 
                value={this.state.comment}
                onChange={this.handleInput('comment')}
              />
          </div>
          <button className="edit-update-button">Update</button>
        </form>

        <div className="cancel-delete-container">
            <button 
              className="edit-cancel-button"
            >Cancel</button>
            <button 
              className="edit-delete-button"
              onClick={this.clickDelete}
            >Delete</button>
        </div>
      </div>
    )
  }

  render() {
    console.log("REVIEW INDEX ITEM PROPS", this.props);
    console.log("REVIEW INDEX ITEM STATE", this.state);
    const { header, comment, name, rating, createdAt, reviewerId } = this.props.review;
    const date = createdAt.slice(0, 10);
    let showReviewStar = this.showReviewStars(rating);
    let showEditReviewStars = this.showEditReviewStars(this.state.rating);

    return (
    <div> 
      { (this.state.showEditForm) ? (
      <div className="edit-review-item-container">
        <form onSubmit={this.handleUpdate}>
          <div className="edit-star-rating-container">
            {showEditReviewStars}
          </div>
          <div className="edit-review-header" >
            <input 
              type="text" 
              onChange={this.handleInput('header')} 
              value={this.state.header}
            />
          </div>
          <div className="edit-review-comment">
              <textarea 
                value={this.state.comment}
                onChange={this.handleInput('comment')}
              />
          </div>
          <button className="edit-update-button">Update</button>
        </form>

        <div className="cancel-delete-container">
            <button 
              className="edit-cancel-button"
              onClick={this.clickCancel}
            >Cancel</button>
            <button 
              className="edit-delete-button"
              onClick={this.clickDelete}
            >Delete</button>
        </div>
      </div>
      ) : (
      <div className="review-item-container">
        <nav className="review-item-nav">
          <div className="name-rating-container">
            <span className="show-star-review">{showReviewStar}</span>
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
                onClick={e => this.clickEdit(e)}
              >Edit Review</button>
            </div> ) : ""
            }
          </div>
      </div>
      )}
      </div>
    );
  }

}

export default ReviewItem;