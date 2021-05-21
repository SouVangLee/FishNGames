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
      rating
    }
    // this.handleStarClick = this.handleStarClick.bind(this);

  }

  showEditStars(rating) {
    
  }


  handleSubmit() {
    return;
  }

  render() {
    return (
      <div className="edit-review-item-container">
        <form onSubmit={this.handleSubmit}>

        </form>

      </div>
    )
  }

}

export default EditReviewForm;