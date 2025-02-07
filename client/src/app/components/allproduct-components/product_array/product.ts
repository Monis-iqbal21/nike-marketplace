const nikeProducts = [
  {
    id: 1,
    name: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    price: 10795,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro1.png",
    detail:
      "The Nike Air Force 1 Mid '07 is a timeless sneaker that blends heritage style with modern comfort. Crafted with premium leather and a cushioned midsole, it offers superior durability and all-day wearability. The mid-top design provides additional support, while perforations enhance breathability. Perfect for casual outings or athletic looks, this iconic shoe is a must-have for anyone seeking versatile style and reliable performance in one package."
  },
  {
    id: 2,
    name: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    price: 4995,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro2.png",
    detail:
      "The Nike Court Vision Low Next Nature features a modern take on a classic court silhouette. Designed with a low-profile build, it combines sleek aesthetics with a soft leather upper for exceptional style and comfort. Built with sustainability in mind, this shoe incorporates recycled materials while maintaining high performance. Its versatility makes it suitable for casual wear or sporty outfits, offering both functionality and an eco-conscious choice."
  },
  {
    id: 3,
    name: "Nike Air Force 1 PLTA.FORM",
    category: "Women's Shoes",
    price: 8695,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro3.png",
    detail:
      "The Nike Air Force 1 PLTA.FORM redefines the classic Air Force 1 with bold, modern updates. Featuring a platform sole for added height and a contemporary edge, this sneaker delivers standout style. Premium materials and clean lines ensure a fashionable yet comfortable fit, while its durable construction is perfect for everyday wear. Whether dressing up or down, this iconic shoe adds a touch of sophistication to any outfit."
  },
  {
    id: 4,
    name: "Nike Air Force 1 React",
    category: "Men's Shoes",
    price: 13295,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro4.png",
    detail:
      "The Nike Air Force 1 React combines the legendary Air Force 1 silhouette with innovative Nike React technology for unparalleled comfort. Featuring a responsive foam midsole and a lightweight upper, this shoe offers enhanced cushioning and support. Modern design elements, including bold branding and unique textures, make it a stylish choice for any occasion. Elevate your sneaker game with this perfect fusion of tradition and innovation."
  },
  {
    id: 5,
    name: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    price: 11895,
    color: "1 Colour",
    status: "Promo Exclusion",
    image: "/images/pro5.png",
    detail:
      "The Air Jordan 1 Elevate Low takes the iconic Jordan design to new heights with an elevated sole and premium materials. Offering a blend of heritage and modern flair, these sneakers deliver both style and comfort. A padded collar and cushioned insole ensure all-day support, while the timeless design makes them a versatile addition to any wardrobe. Perfect for casual outings or making a statement, this pair is a true standout."
  },
  {
    id: 6,
    name: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    price: 2895,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro6.png",
    detail:
      "The Nike Standard Issue Basketball Jersey combines classic court style with modern performance. Made from breathable, lightweight fabric, it ensures comfort during intense play or casual wear. Designed for versatility, this jersey features a relaxed fit and bold Nike branding. Whether you're on the court or off, its durable construction and stylish design make it an essential piece for athletes and basketball fans alike."
  },
  {
    id: 7,
    name: "Nike Dunk Low Retro SE",
    category: "Men's Shoes",
    price: 8595,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro7.png",
    detail:
      "The Nike Dunk Low Retro SE brings retro vibes to the forefront with its low-profile silhouette and durable leather construction. Perfect for casual wear or skateboarding, these sneakers deliver both style and functionality. The bold color blocking and iconic Swoosh branding make them a standout choice, while the cushioned midsole provides comfort for all-day wear. Add a touch of nostalgia to your wardrobe with these timeless kicks."
  },
  {
    id: 8,
    name: "Nike Dri-FIT UV Hyverse",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    price: 2495,
    color: "3 Colours",
    status: "Just In",
    image: "/images/pro8.png",
    detail:
      "The Nike Dri-FIT UV Hyverse Graphic Fitness Top is your go-to for workouts and outdoor activities. Featuring moisture-wicking Dri-FIT technology and built-in UV protection, it keeps you dry, comfortable, and shielded from the sun. The lightweight, breathable fabric ensures optimal performance, while the stylish graphic design adds a modern touch. Whether running, training, or relaxing, this versatile top is perfect for any occasion."
  },
  {
    id: 9,
    name: "Nike One Leak Protection: Period",
    category: "Women's Mid-Rise Biker Shorts",
    price: 3955,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro9.png",
    detail:
      "The Nike One Leak Protection Period Biker Shorts are specially designed for active women. Featuring leak-proof technology, they offer confidence and comfort during workouts or everyday activities. The mid-rise fit and soft, stretchy fabric provide a supportive and flattering silhouette. Whether you're at the gym or on the go, these shorts ensure you stay comfortable and focused, no matter the time of the month."
  },
  {
    id: 10,
    name: "Nike Court Vision Low",
    category: "Men's Shoes",
    price: 6895,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro10.png",
    detail:
      "The Nike Court Vision Low takes inspiration from classic basketball shoes with a modern twist. Featuring a low-top profile and a clean leather upper, these sneakers are versatile and stylish. Designed for everyday wear, they offer durability and a comfortable fit. The timeless design makes them a staple for casual outings, athletic looks, or pairing with your favorite streetwear."
  },
  {
    id: 11,
    name: "Nike Air Force 1 LV8 3",
    category: "Older Kids' Shoes",
    price: 7495,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro11.png",
    detail:
      "The Nike Air Force 1 LV8 3 is perfect for kids who need comfort and style. With a classic design inspired by the iconic Air Force 1, these shoes are built to last. The premium materials ensure durability, while the cushioned midsole provides all-day comfort. Whether for school or play, these sneakers combine timeless looks with a fit tailored for growing feet, making them a go-to choice for kids."
  },
  {
    id: 12,
    name: "Nike Blazer Low Platform",
    category: "Women's Shoes",
    price: 8195,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro12.png",
    detail:
      "The Nike Blazer Low Platform reimagines a classic basketball silhouette with a bold platform sole for modern style. Crafted with premium materials, these low-top sneakers offer a sleek and comfortable fit. The elevated sole adds a touch of height while maintaining the shoe's vintage charm. Whether paired with jeans or dresses, these versatile sneakers make a stylish statement wherever you go."
  },
  {
    id: 13,
    name: "Nike Air Force 1 '07",
    category: "Women's Shoes",
    price: 8195,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro13.png",
    detail:
      "The Nike Air Force 1 '07 is a staple in women’s footwear, blending timeless style with modern comfort. Featuring a premium leather upper, durable construction, and a classic low-top design, it’s perfect for daily wear. The cushioned midsole ensures all-day support, while the versatile look complements a variety of outfits. Whether you're dressing up or keeping it casual, this iconic sneaker is always in fashion."
  },
  {
    id: 14,
    name: "Nike Pro Dri-FIT",
    category: "Men's Tight-Fit Sleeveless Top",
    price: 1485,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro14.png",
    detail:
      "The Nike Pro Dri-FIT Sleeveless Top is designed for high-performance athletes. Made with breathable, moisture-wicking fabric, it keeps you cool and dry during intense workouts. The tight-fit design provides support and mobility, making it ideal for layering or wearing on its own. Whether you’re hitting the gym or training outdoors, this top ensures you stay comfortable and focused on your goals."
  },
  {
    id: 15,
    name: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    price: 8595,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro15.png",
    detail:
      "The Nike Dunk Low Retro brings nostalgic style with its iconic low-top silhouette and bold colorways. Made with durable leather, these sneakers offer a comfortable fit for everyday wear. The padded collar and cushioned midsole add extra support, making them ideal for long days on your feet. Whether you're a sneakerhead or a casual wearer, these retro-inspired kicks make a strong statement."
  },
  {
    id: 16,
    name: "Nike Air Max SC",
    category: "Women's Shoes",
    price: 5995,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro16.png",
    detail:
      "The Nike Air Max SC is a perfect blend of style and comfort for women on the go. Featuring the signature Air Max cushioning, these sneakers provide exceptional support and shock absorption. The breathable upper and lightweight design ensure all-day comfort, while the versatile style pairs effortlessly with casual or sporty outfits. Whether you're running errands or exploring the city, these shoes deliver both fashion and functionality."
  },
  {
    id: 17,
    name: "Nike Dri-FIT UV Miler",
    category: "Men's Short-Sleeve Running Top",
    price: 1695,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro17.png",
    detail:
      "The Nike Dri-FIT UV Miler Running Top is your ideal companion for outdoor runs. Designed with Dri-FIT technology, it wicks away sweat to keep you dry and comfortable. The built-in UV protection shields your skin from harmful sun rays, while the lightweight fabric enhances breathability. With a relaxed fit and stylish design, this top is perfect for performance and leisure alike."
  },
  {
    id: 18,
    name: "Nike Air Max SYSTM",
    category: "Older Kids' Shoes",
    price: 6495,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro18.png",
    detail:
      "The Nike Air Max SYSTM delivers style and comfort for active kids. Featuring Air Max cushioning, these sneakers provide excellent shock absorption for all-day play. The sleek design and premium materials ensure durability, while the breathable upper keeps little feet cool and comfortable. Whether for school or weekend adventures, these shoes offer the perfect balance of performance and style for kids on the move."
  },
  {
    id: 19,
    name: "Nike Alate All U",
    category: "Women's Lightly Lined U-Neck Sports Bra",
    price: 2195,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro19.png",
    detail:
      "The Nike Alate All U Sports Bra is designed for ultimate comfort and versatility. Featuring a lightly lined U-neck design, it provides the perfect balance of support and freedom of movement. The soft, breathable fabric ensures all-day comfort, making it ideal for workouts, yoga sessions, or casual wear. With its stylish and functional design, this sports bra is a wardrobe essential for active women."
  },
  {
    id: 20,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: 7495,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro20.png",
    detail:
      "The Nike Court Legacy Lift elevates classic tennis-inspired style with a platform sole for added height. Made with premium materials, these sneakers are as comfortable as they are chic. The timeless design ensures versatility, making them perfect for pairing with jeans, dresses, or sporty outfits. Whether for casual outings or creating a bold fashion statement, these shoes deliver in both style and comfort."
  },
  {
    id: 21,
    name: "Nike Swoosh",
    category: "Women's Medium-Support Padded Sports Bra Tank",
    price: 3095,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro21.png",
    detail:
      "The Nike Swoosh Sports Bra Tank offers medium support and a flattering fit for active women. Designed with a padded interior for comfort, it provides the right level of support for medium-impact activities such as cycling, running, and gym workouts. The breathable, moisture-wicking fabric keeps you cool and dry, while the iconic Nike Swoosh logo adds a touch of sporty style. Available in two versatile colours, it pairs perfectly with your activewear wardrobe."
  },
  {
    id: 22,
    name: "Nike SB Zoom Janoski OG+",
    category: "Shoes",
    price: 8595,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro22.png",
    detail:
      "The Nike SB Zoom Janoski OG+ combines skate-inspired style with premium performance. Designed for durability and comfort, these shoes feature a Zoom Air cushioning for responsive support, while the suede and canvas upper provides a stylish, long-lasting fit. Whether you're skating or just looking for a trendy sneaker, the Janoski OG+ delivers with its classic low-top design, sleek lines, and a comfortable fit that moves with you."
  },
  {
    id: 23,
    name: "Nike Dri-FIT Run Division Rise 365",
    category: "Men's Running Tank",
    price: 1485,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro23.png",
    detail:
      "The Nike Dri-FIT Run Division Rise 365 Running Tank is engineered to enhance your performance during runs. Made with advanced Dri-FIT technology, it effectively wicks away sweat, keeping you dry and comfortable no matter the intensity. The lightweight, breathable fabric ensures maximum ventilation, while the sleek design allows for unrestricted movement. Whether you're training for a race or just going for a jog, this tank is designed to help you perform your best."
  },
  {
    id: 24,
    name: "Nike Dri-FIT challenger",
    category: "Men's 18cm (approx) 2-in-1 Versatile Shorts",
    price: 2495,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro24.png",
    detail:
      "The Nike Dri-FIT Challenger 2-in-1 Shorts are built for athletes who demand performance and comfort. Featuring built-in compression shorts for support and freedom of movement, these versatile shorts are designed for running, training, and active wear. The Dri-FIT technology wicks away sweat, ensuring you stay dry, while the 18cm inseam offers the perfect balance of coverage and mobility. Whether you're at the gym or out for a run, these shorts provide the perfect fit and flexibility."
  },
  {
    id: 25,
    name: "Jordan Series ES",
    category: "Men's Shoes",
    price: 7495,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro25.png",
    detail:
      "The Jordan Series ES shoes bring a mix of modern comfort and the legendary Jordan design. Inspired by the iconic Jordan legacy, these sneakers feature a durable rubber outsole for traction and a cushioned midsole for all-day comfort. The breathable upper ensures your feet stay cool and fresh, while the sleek, stylish design makes them suitable for both athletic and casual wear. Available in two bold colours, these shoes are the perfect blend of style and performance."
  },
  {
    id: 26,
    name: "Nike Outdoor Play",
    category: "Older Kids Oversized Woven Jacket",
    price: 3895,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro26.png",
    detail: "Comfortable and stylish jacket designed for active kids.",
  },
  {
    id: 27,
    name: "Nike Sportswear Trend",
    category: "Older Kids (Girl's) High-waisted Woven Shorts",
    price: 2495,
    color: "2 Colours",
    status: "Just In",
    image: "/images/pro27.png",
    detail:
    "The Nike Sportswear Trend high-waisted woven shorts combine sporty style with everyday comfort, designed especially for active kids. These shorts are crafted from lightweight, breathable fabric to keep them cool and comfortable during play or casual wear. With a trendy high-waisted fit and durable construction, they ensure a perfect balance of style and functionality. Ideal for pairing with a favorite top or hoodie, these versatile shorts are a must-have for every wardrobe."

  },
  {
    id: 28,
    name: "Nike Blazer Low'77 Jumbo",
    category: "Women's Shoes",
    price: 8595,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro28.png",
    detail: "The Nike Blazer Low '77 Jumbo combines retro style with modern comfort, offering a sleek, low-profile design perfect for everyday wear. Featuring a jumbo Swoosh logo and a soft, cushioned interior, these shoes provide support and style. Durable materials ensure long-lasting performance, while the versatile design makes them ideal for casual outings or sporty looks. Elevate your wardrobe with this iconic piece of footwear."

  },
  {
    id: 29,
    name: "Nike SB Force 58",
    category: "Skate Shoe",
    price: 5995,
    color: "1 Colour",
    status: "Just In",
    image: "/images/pro29.png",
    detail: "The Nike SB Force 58 skate shoe combines durability and performance for skaters. With a low-profile design, suede and leather upper, and a rubber outsole, it offers excellent grip and board feel. The cushioned insole ensures comfort during long sessions, while the classic Nike branding adds a stylish touch. Perfect for both beginners and advanced skaters looking for comfort and durability."
  },
];

export default nikeProducts;
