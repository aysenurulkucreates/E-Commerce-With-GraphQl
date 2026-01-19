const crypto = require("crypto");
const { products, reviews } = require("../db");

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: crypto.randomUUID(),
      name,
    };

    db.categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
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

    db.products.push(newProduct);

    return newProduct;
  },

  addReview: (parent, { input }, { db }) => {
    const { title, date, comment, rating, productId } = input;

    const newReview = {
      id: crypto.randomUUID(),
      title,
      date,
      comment,
      rating,
      productId,
    };

    db.reviews.push(newReview);

    return newReview;
  },
  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product; // return yazmazsan eski ürünler dönmez, silinir.
    });
    return true;
  },
};
