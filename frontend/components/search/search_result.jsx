import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    console.log("search index props", this.props);
    return null;
  }
}

export default SearchResult;