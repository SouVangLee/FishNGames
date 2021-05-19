import React from 'react';

class ReviewForm extends React.Component{
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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.resetState(e);
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
    //console.log("REVIEW FORM", this.props);
    return (
      <div className="review-form">
        <div className="review-form-container">

          <h2>Write a Review</h2>
          
          <form onSubmit={this.handleSubmit}>
            <div className="review-header" >
              <input 
                type="text" 
                onChange={this.handleInput('header')} 
                value={this.state.header}
                placeholder="Enter in a header..."
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
                <input type="radio" name="rating" id="star1" value="1"/>
                <label for="star1">
                  <i className="fas fa-star"></i>
                </label>

                <input type="radio" name="rating" id="star2" value="2"/>
                <label for="star2">
                  <i className="fas fa-star"></i>
                </label>

                <input type="radio" name="rating" id="star3" value="3"/>
                <label for="star3">
                  <i className="fas fa-star"></i>
                </label>

                <input type="radio" name="rating" id="star4" value="4"/>
                <label for="star4">
                  <i className="fas fa-star"></i>
                </label>

                <input type="radio" name="rating" id="star5" value="5"/>
                <label for="star5">
                  <i className="fas fa-star"></i>
                </label>
              </div>
              <button className="review-button">Submit Review!</button>
            </div>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    )
  }  
}

export default ReviewForm