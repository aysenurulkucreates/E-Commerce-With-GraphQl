exports.Query = {
  hello: () => "World",

  // DÜZELTME 1: Çantaya 'reviews' eklendi (Çünkü aşağıda puan hesabı yapacağız)
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

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
          reviews.forEach((review) => {
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

  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },

  categories: (parent, args, { categories }) => categories,

  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
