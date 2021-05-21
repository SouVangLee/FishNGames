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
    this.handleStarClick = this.handleStarClick.bind(this);

  }

  // handleStarClick(star_num) {
  //   return e => {
  //     e.preventDefault();
  //     this.setState({ rating: star_num });

  //     let star_div = document.getElementsByClassName("stars");
  //     let star_img = document.getElementsByClassName("fa-star");

  //     for (let i = 0; i < 5; i++) {
  //       if (i <= star_num - 1) {
  //         if (star_div[i].classList.contains("not-active-background")) {
  //           star_div[i].classList.remove("not-active-background");
  //         }
  //         if (!star_div[i].classList.contains("active-background")) {
  //           star_div[i].classList.add("active-background");
  //         }
  //         if (star_img[i].classList.contains("not-active-star")) {
  //             star_img[i].classList.remove("not-active-star")
  //         }
  //         if (!star_img[i].classList.contains("active-star")) {
  //           star_img[i].classList.add("active-star");
  //       }
  //       } else {
  //         if (star_div[i].classList.contains("active-background")) {
  //           star_div[i].classList.remove("active-background");
  //         }
  //         if (!star_div[i].classList.contains("not-active-background")) {
  //           star_div[i].classList.add("not-active-background");
  //         }
  //         if (star_img[i].classList.contains("active-star")) {
  //           star_img[i].classList.remove("active-star")
  //       }
  //         if (!star_img[i].classList.contains("not-active-star")) {
  //             star_img[i].classList.add("not-active-star")
  //         }
  //       }
  //     }
  //   }
  // }

  showEditStars(rating) {
    let starArr = [];
    let i = 0;
    for (i; i < rating; i++) {
      let gold_star = ( 
        <div 
          className="edit-active-background" 
          onClick={ this.handleStarClick(i) }
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
          onClick={ this.handleStarClick(i) }
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