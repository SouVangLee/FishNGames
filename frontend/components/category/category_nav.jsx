import React from 'react';
import { Link } from 'react-router-dom';

class CategoryNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    console.log("PROPS", this.props);
    const categoryList = this.props.categories.map(category => (
      <Link 
        key={`${category.name}-${category.id}`}
      to={`/categories/${category.id}`}>{category.name}</Link>
    ))
    return (
      <div className="category-list">
        {categoryList}
      </div>
    )
  }
}


export default CategoryNav;