const { categories, reviews } = require("../db");

// Ürünün içindeki Kategori bilgisini çözer (Many-to-One)
exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    // parent = O anki Ürün
    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
