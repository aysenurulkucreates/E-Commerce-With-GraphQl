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
