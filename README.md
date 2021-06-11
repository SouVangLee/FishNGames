# README

[FishNGames Live!](https://fish-n-games.herokuapp.com/#/)

# Welcome to FishNGames!

&nbsp;

FishNGames is a clone website of BassProShop, where customers can purchase products that relate to outdoor recreation such as fishing, hunting, camping and hiking.

![splash_gif](https://media.giphy.com/media/wVDksAATNvwSjCfMHo/giphy.gif)


&nbsp;

## Features

&nbsp;

### User Authentication 

Clicking the sign-in button will open a modal on the right side of the screen. A user may sign in with his/her own account or use the demo to log in. A user must be logged in to write/edit/delete a review for a product, and add products to their shopping cart. 

![sign_in_gif](https://media.giphy.com/media/BYnnyW6KKTaSgZvZgm/giphy.gif)

&nbsp;

### Products

Clicking on a category will render all the products for that specific category. There is a filter on the left column to filter products by any price.

![category_gif](https://media.giphy.com/media/BgV9yDJ3B0NDJh2EbY/giphy.gif)

&nbsp;

Clicking on a product will open the product's show page. While on this page, users are able to add the product to their shopping cart and write/view
reviews.

![product_gif](https://media.giphy.com/media/kvIAtYHKnsEE3PQiBu/giphy.gif)

&nbsp;

### Reviews

Users will only be able to write a review if they are signed in. If they are not, the create review form will be hidden. Users can click "Edit" on their post to 
delete or update it.

![review_gif](https://media.giphy.com/media/S2tGoPPdzquise9OYs/giphy.gif)

&nbsp;

### Cart

After adding an item to their shopping cart, A user can choose to go view their shopping cart or continue shopping. When they are on the shopping cart page,
all of the items that the user added to cart will be displayed there. Users can also update the quantity by entering in a new quantity, which will update the
subtotal price and total price of all the items in the shopping cart.

![shopping_cart](https://media.giphy.com/media/fYVini63jN4lToS2bx/giphy.gif)

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

## Built with
* Rails on Ruby (Back End)
* React + Redux (Front End)
* PostgresSQL (Database)
* HTML + CSS
* Active Storage + Amazon Web Services S3
* Heroku (Host)
