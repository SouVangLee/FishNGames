import React from 'react';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);

    const { reviewerId, productId, header, comment, rating} = this.props.review;
    this.state = {
      reviewerId,
      productId,
      header,
      comment,
      rating,
    }
    this.handleStarClick = this.handleStarClick.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  clickDelete() {
    this.props.deleteReview(this.props.review.id);
    this.setState({ showEditForm: false});
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateReview(this.state);
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

  showEditStars(rating) {
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

  render() {
    console.log("EDIT FORM PROPS", this.props);
    let showStars = this.showEditStars(this.state.rating);
    return (
      <div className="edit-review-item-container">
        <form onSubmit={this.handleUpdate}>
          <div className="edit-star-rating-container">
            {showStars}
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

          <div className="edit-review-form-buttons">
            <button 
              className="edit-cancel-button"
            >Cancel</button>
            
            <button 
              className="edit-update-button"
              onClick={this.clickUpdate}
            >Update</button>

            <button 
              className="edit-delete-button"
              onClick={this.clickDelete}
            >Delete</button>
          </div>
        </form>
      </div>
    )
  }

}

export default EditReviewForm;