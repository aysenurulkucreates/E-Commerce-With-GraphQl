const { products } = require("../db");

// Kategorinin içindeki Ürünler listesini çözer (One-to-Many)
exports.Category = {
  products: ({ id: categoryId }, args, { products }) => {
    // parent = O anki Kategori
    return products.filter((product) => product.categoryId === id);
  },
};
