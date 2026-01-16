const { products } = require("../db");

// Kategorinin içindeki Ürünler listesini çözer (One-to-Many)
exports.Category = {
  products: (parent, args, context) => {
    // parent = O anki Kategori
    return products.filter((product) => product.categoryId === parent.id);
  },
};
