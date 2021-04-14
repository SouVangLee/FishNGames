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
      <ul className="error-list">
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
    console.log("REvIEW FORM PROPS", this.props);
    console.log("REVIEW state", this.state);
    return (
      <div className="review-form-container">
        {this.renderErrors()}

        <h2>Write a Review</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="star-rating">
            <select name="rating" onChange={this.handleInput('rating')}>
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
              <option value="2">2 Star</option>
              <option value="1">1 Star</option>
            </select>
          </div>

          <div className="review-comment">
            <textarea 
              cols="50" 
              rows="10"
              value={this.state.comment}
              onChange={this.handleInput('comment')}
            />
          </div>

          <button className="review-button">Submit Review!</button>
        </form>
      </div>
    )
  }  
}

export default ReviewForm