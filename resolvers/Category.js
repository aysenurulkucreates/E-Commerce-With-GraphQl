exports.Category = {
  // 1. args içinden 'filter'ı çıkardık (Destructuring)
  products: ({ id: categoryId }, { filter }, { db }) => {
    // 2. Önce bu kategoriye ait TÜM ürünleri buluyoruz (Ham liste)
    const categoryProducts = db.products.filter(
      (product) => product.categoryId === categoryId,
    );

    let filteredCategoryProducts = categoryProducts;

    // 3. Eğer filtre gönderilmişse (ve onSale true ise) elemeyi yapıyoruz
    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          },
        );
      }
    }

    // 4. En son süzülmüş listeyi teslim ediyoruz
    return filteredCategoryProducts;
  },
};
