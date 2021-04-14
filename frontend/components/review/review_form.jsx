import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    console.log("PROPS CONSTRUCTOR", this.props)

    this.state = {
      reviewer_id: this.props.currentUser,
      comment: '',
      rating: 5,
      product_id: this.props.product_id
    }
  }
  

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    console.log("PROPS", this.props)
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }  
}

export default ReviewForm