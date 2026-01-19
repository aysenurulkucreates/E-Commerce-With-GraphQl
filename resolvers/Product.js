exports.Product = {
  // Üründen -> Kategoriye gitme (Tekil olduğu için .find)
  category: ({ categoryId }, args, { db }) => {
    return db.categories.find((category) => category.id === categoryId);
  },

  // Üründen -> Yorumlara gitme (Çoğul olduğu için .filter)
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};
