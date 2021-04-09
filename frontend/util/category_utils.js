export const fetchAllCategories = () => {
  return $.ajax({
    method: "GET",
    url: "/api/categories"
  });
};

export const fetchAllProducts = (categoryId) => {
  return $.ajax({
    method: "GET",
    url: `/api/categories/${categoryId}`
  });
};