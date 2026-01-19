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
  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
  },
  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
  updateCategory: (parent, { id, input }, { db }) => {
    if (index === -1) return null;
    const index = db.categories.findIndex((category) => category.id === id);
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },
  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id);
    db.products[index] = {
      ...db.products[index],
      ...input,
    };
    return db.products[index];
  },
  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id);
    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };
    return db.reviews[index];
  },
};
