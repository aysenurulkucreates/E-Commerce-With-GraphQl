# İNDİRİLEN PAKETLER

- @apollo/server
- graphql
- graphql-tag
- npm install -D nodemon

# GENEL NOTLAR

- Modern grapql de gql kullanacaksan ayrıca indireceksin ve tanımlayacaksın.
- Listen.server kalktı eski mode ol, onun yerine standelo kulanacskısn.
- Ayrıca indirmene gerek yok apollo paketşyle gelşyor, sadece tanımlasan yeter .const { startStandaloneServer } = require("@apollo/server/standalone"); bu şekilde.
- Types String, Int(tam sayılar için kullanılır), Float(virgüllü sayılar için kuallanılır), Boolean
- Kesin string döndürsün dersen mutlaka sonuna ! ekle.
- REST mimarisinde çok katı kurallar vardır:

Veri ekliyorsan mutlaka POST kullanmalısın.

Veri siliyorsan mutlaka DELETE kullanmalısın.

GraphQL ise daha pratik ve esnektir:

"Kardeşim ister ekle, ister sil, ister güncelle... Sonuçta veritabanını değiştiriyor musun? Evet. O zaman alayına Mutation diyoruz geçiyoruz." der.

Yani GraphQL; POST, PUT ve DELETE'i tek bir çatı altında toplar.

- uuid kullanacağın zaman sayfa başına bu gelecek const crypto = require('crypto');, aşağıya da
  crypto.randomUUID() bu kullanılacak. Bu yapı veriye kimlik oluşturur ve benzersiz id yaratır, hangiisne verirsen.

- Garphql anayasası (parent, args, context) bu yapılar mutlaka olur.
- parent Üst veri (Genelde boş) GraphQL Zinciri
  2 { input } Gelen Veri (Kullanıcı yolladı) Schema'daki (typeDefs) tanım
  3 { categories } Veritabanı (Depo) index.js'teki context ayarı

- Mutations denilen şey de get, put, delete vs hepsini kapsar, sen schem aiçine ne yapmak istediğini, neyi kapsamasını istediğini yazıyorsun ve direkt kullanıyorsun.
- İlk oluşturduğun const verisinde id vermezsin çünkü o frontend tarafından gelen, sen ancak kullanıcı seçtiğinde ürünü id verebilirsin. örne üzrinden gösterim, const { title, date, comment, rating, productId } = input;

  const newReview = {
  id: crypto.randomUUID(),
  title,
  date,
  comment,
  rating,
  productId,
  }; ban böyle
