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
    const categoryList = this.props.categories.map(category => (
      <Link 
        key={`${category.name}-${category.id}`}
        to={`/categories/${category.id}`}
      >{category.name.toUpperCase()}</Link>
    ))
    return (
      <div className="category-list">
        {categoryList}
      </div>
    )
  }
}


export default CategoryNav;