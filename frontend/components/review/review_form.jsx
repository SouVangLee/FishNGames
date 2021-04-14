import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllReviews();
  }

  render() {
    console.log("PROPS", this.props)
    return (
      <div>Im in the ReviewForm</div>
    )
  }  
}

export default ReviewForm