import React from 'react';
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { searchInput } = this.state;
    this.props.history.push({ pathname: '/search', search: `search=${searchInput}`});
  }
  
  handleInput(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <div className="search-box">
        <form className="search-box-form" onSubmit={this.handleSubmit}>
          <input type="search" placeholder="Search Here..." onChange={this.handleInput("searchInput")}/>
          <button className="search-logo"><i className="fas fa-search"></i></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);