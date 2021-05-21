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
    let starArr = [];
    let i = 0;
    for (i; i < rating; i++) {
      let gold_star = ( 
        <div 
          className="edit-active-background" 
          // onClick={ this.handleStarClick(i) }
          key={i}
        >
          <i className="fas fa-star edit-gold-star" key={i}></i> 
        </div>
      );
      starArr.push(gold_star);
    }
    for (i; i < 5; i++) {
      let grey_star = ( 
        <div 
          className="edit-not-active-background"
          // onClick={ this.handleStarClick(i) }
          key={i}
        >
          <i className="fas fa-star edit-grey-star" key={i}></i> 
        </div>
      );
      starArr.push(grey_star);
    }

    return starArr;
  }


  handleSubmit() {
    return;
  }

  render() {
    let showStars = this.showEditStars(this.state.rating);
    return (
      <div className="edit-review-item-container">
        <form onSubmit={this.handleSubmit}>
          <div className="edit-star-rating-container">
            {showStars}
          </div>
        </form>

      </div>
    )
  }

}

export default EditReviewForm;