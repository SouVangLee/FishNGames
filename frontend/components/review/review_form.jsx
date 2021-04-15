import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      reviewer_id: this.props.currentUser,
      comment: '',
      rating: 5,
      product_id: this.props.product_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state)
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
    return (
      <div className="review-form">
        <div className="review-form-container">

          <h2>Write a Review</h2>
          
          <form onSubmit={this.handleSubmit}>
            <div className="review-comment">
              <textarea 
                value={this.state.comment}
                onChange={this.handleInput('comment')}
              />
            </div>

            <div className="rate-and-submit-container">
              <div className="star-rating">
                <select name="rating" onChange={this.handleInput('rating')}>
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
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