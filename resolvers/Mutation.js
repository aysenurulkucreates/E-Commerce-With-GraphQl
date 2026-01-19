const crypto = require("crypto");
const { products, reviews } = require("../db");

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: crypto.randomUUID(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
    const { name, description, image, quantity, price, onSale, categoryId } =
      input;

    const newProduct = {
      id: crypto.randomUUID(),
      name,
      description,
      image,
      quantity,
      price,
      onSale,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },

  addReview: (parent, { input }, { reviews }) => {
    const { title, date, comment, rating, productId } = input;

    const newReview = {
      id: crypto.randomUUID(),
      title,
      date,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
};
