import React from 'react';

class SearchBar extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
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
          <input type="search" placeholder="Search Here..." onChange={this.handleInput("search")}/>
          <button className="search-logo"><i className="fas fa-search"></i></button>
        </form>
      </div>
    )
  }
}

export default SearchBar;