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
                <input type="radio" name="rating" value="1"/>
                <input type="radio" name="rating" value="2"/>
                <input type="radio" name="rating" value="3"/>
                <input type="radio" name="rating" value="4"/>
                <input type="radio" name="rating" value="5" checked/>
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