exports.Query = {
  hello: () => "World",
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
    console.log(filteredProducts);

    if (filter) {
      const { onSale, avgRating } = filter;

      // Filtre 1: İndirimdekiler
      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }

      // Filtre 2: Ortalama Puan (Average Rating)
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;

          // Bu ürüne ait yorumları bul ve puanlarını topla
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });

          // Ortalamayı Hesapla (Toplam / Adet)
          const avgProductRating = sumRating / numberOfReviews;

          // Eğer ürünün ortalaması istenen puandan büyük veya eşitse göster
          return avgProductRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  },

  product: (parent, { id }, { db }) => {
    return db.products.find((product) => product.id === id);
  },

  categories: (parent, args, { db }) => db.categories,

  category: (parent, { id }, { db }) => {
    return db.categories.find((category) => category.id === id);
  },
};
