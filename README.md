# README

[FishNGames Live!](https://fish-n-games.herokuapp.com/#/)

# Welcome to FishNGames!

&nbsp;

FishNGames is a clone website of BassProShop, where customers can purchase products that relate to outdoor recreation such as fishing, hunting, camping and hiking.

![splash_gif](https://user-images.githubusercontent.com/70188998/114985479-b4e97f00-9e47-11eb-8af6-fbb12c8af472.gif)


&nbsp;

## Features

&nbsp;

### User Authorization 

Clicking the sign-in button will open a modal on the right side of the screen. A user may sign in with his/her own account or use the demo to log in. A user must be logged in to write/edit/delete a review for a product, and add products to their shopping cart (shopping cart feature coming soon!). 

![sign_in_gif](https://user-images.githubusercontent.com/70188998/114985573-cc286c80-9e47-11eb-9213-c4cbf5fdf874.gif)

&nbsp;

### Products

Clicking on a category will render all the products for that specific category. 

![category_gif](https://user-images.githubusercontent.com/70188998/114985585-d0ed2080-9e47-11eb-9e84-45874adaa13b.gif)

&nbsp;

Clicking on a product will open the product's show page. 

![product_gif](https://user-images.githubusercontent.com/70188998/114985620-dcd8e280-9e47-11eb-885c-50d11404abf8.gif)

&nbsp;

### Reviews

Users will only be able to write a review if they are signed in. If they are not, the review submission form will be hidden. Users can click "Edit" on their post to delete or update (update feature coming soon!) it.

![review_gif](https://user-images.githubusercontent.com/70188998/114985640-e2362d00-9e47-11eb-8ee6-d92f6314279a.gif)

&nbsp;

## Code Snippets

Below is a code snippet of how all the products will be rendered when a category is clicked.

```jsx
  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCategoryProducts(this.props.match.params.id)
    }
  }

  render() {
    const productList = this.props.products.map(product => (
      <div className="product-info-link" key={`${product.id}`}>
        <Link className="product-link" to={`/products/${product.id}`}>
          <img src={product.photoUrls[0]} alt=""/>
          <h2>{product.name}</h2>
          <h3>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2
            }).format(product.price)}
          </h3>
        </Link>
      </div>
    ));

    return (
      <div className="category-container">
        <div className="category-banner">
          <img 
            className="category-image" 
            src={this.state.banners[this.props.match.params.id]}
          />
        </div>
        
        <div className="category-body-container">
          <section className="search-section">
            <h2>Search Filter Coming Soon...</h2>
          </section>

          <section className="product-section">
            {productList}
          </section>
        </div>
      </div>
    )
  }
}
```

## Upcoming Features
* Implement an update button to allow users to update their reviews.
* Implement  shopping cart system to allow users to add products to their shopping cart.
* Implement search bar that returns a list of products by similar name.
* Implement filter for products based on price.

## Built with
* Rails on Ruby (Back End)
* React + Redux (Front End)
* PostgresSQL (Database)
* HTML + CSS
* Active Storage + Amazon Web Services S3
* Heroku (Host)
