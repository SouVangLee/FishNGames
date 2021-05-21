import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      reviewer_id: this.props.currentUser,
      header: '',
      comment: '',
      rating: 5,
      product_id: this.props.product_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then(() => this.resetState(e));
  }

  handleStarClick(star_num) {
    return e => {
      e.preventDefault();
      this.setState({ rating: star_num });

      let star_div = document.getElementsByClassName("form-star-div");
      let star_img = document.getElementsByClassName("form-star");

      for (let i = 0; i < 5; i++) {
        if (i <= star_num - 1) {
          if (star_div[i].classList.contains("not-active-background")) {
            star_div[i].classList.remove("not-active-background");
          }
          if (!star_div[i].classList.contains("active-background")) {
            star_div[i].classList.add("active-background");
          }
          if (star_img[i].classList.contains("not-active-star")) {
              star_img[i].classList.remove("not-active-star")
          }
          if (!star_img[i].classList.contains("active-star")) {
            star_img[i].classList.add("active-star");
        }
        } else {
          if (star_div[i].classList.contains("active-background")) {
            star_div[i].classList.remove("active-background");
          }
          if (!star_div[i].classList.contains("not-active-background")) {
            star_div[i].classList.add("not-active-background");
          }
          if (star_img[i].classList.contains("active-star")) {
            star_img[i].classList.remove("active-star")
        }
          if (!star_img[i].classList.contains("not-active-star")) {
              star_img[i].classList.add("not-active-star")
          }
        }
      }
    }
  }

  resetState(e) {
    e.preventDefault();
    this.setState({
      reviewer_id: this.props.currentUser,
      header: '',
      comment: '',
      rating: 5,
      product_id: this.props.product_id
    })
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  renderErrors() {
    return (
      <ul className="review-error-list">
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    )
  }

  componentWillUnmount() {
    const errors = [];
    this.props.deleteErrors(errors);
  }

  render() {
    console.log("Check STATE", this.state);
    return (
      <div className="review-form">
        <div className="review-form-container">

          <h2>Write a Review</h2>
          
          <form onSubmit={this.handleSubmit}>
            <div className="review-header-form" >
              <input 
                type="text" 
                onChange={this.handleInput('header')} 
                value={this.state.header}
                maxLength={80}
                placeholder="Enter in a header here... It cannot be greater than 80 characters..."
              />
            </div>

            <div className="review-comment">
              <textarea 
                value={this.state.comment}
                onChange={this.handleInput('comment')}
                placeholder="Enter in your comments..."
              />
            </div>

            <div className="rate-and-submit-container">
              <div className="star-rating">
                <div className="form-star-div active-background" onClick={ this.handleStarClick(1)}>
                  <i className="fas fa-star active-star form-star" ></i>
                </div>
                <div className="form-star-div active-background" onClick={ this.handleStarClick(2)}>
                  <i className="fas fa-star active-star form-star"></i>
                </div>
                <div className="form-star-div active-background" onClick={ this.handleStarClick(3)}>
                  <i className="fas fa-star active-star form-star"></i>
                </div>
                <div className="form-star-div active-background" onClick={ this.handleStarClick(4)}>
                  <i className="fas fa-star active-star form-star"></i>
                </div>
                <div className="form-star-div active-background" onClick={ this.handleStarClick(5)}>
                  <i className="fas fa-star active-star form-star"></i>
                </div>
              </div>
              <button className="review-button">Submit Review!</button>
            </div>
          </form>
          <div className="placeholder1">
            <div className="placeholder2">
            </div>
            <div className="right-error-list-container">
              {this.renderErrors()}
            </div>
          </div>
        </div>
      </div>
    )
  }  
}

export default ReviewForm;