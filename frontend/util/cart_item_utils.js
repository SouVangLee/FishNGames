export const fetchAllCartItems = () => {
  return $.ajax({
    method: "GET",
    url: "/api/cart_items"
  });
};

export const createCartItem = cartItem => {
  return $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cartItem }
  });
};

export const updateCartItem = cartItem => {
  return $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { cartItem }
  });
};

export const deleteCartItem = cartItemId => {
  return $.ajax({
    method: "DELETE",
    url: `api/cart_items/${cartItemId}`
  });
};