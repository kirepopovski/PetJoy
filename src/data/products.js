import toyball from "../assets/toyball.jpeg";
import yellowduck from "../assets/yellowduck.jpg";
import catTunnel from "../assets/catTunnel.png";
import horseShoe from "../assets/horseShoe.jpg";
import rubber from "../assets/rubber.jpeg";
import kong from "../assets/kong.jpg";
import orangeball from "../assets/orangeball.png";
import woodenHangingSwing from "../assets/woodenHangingSwing.jpg";
import soundSupplie from "../assets/soundSupplie.jpg";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
import apparel1 from "../assets/apparel1.png";
import apparel2 from "../assets/apparel2.png";
import apparel3 from "../assets/apparel3.png";
import apparel4 from "../assets/apparel4.png";
import apparel5 from "../assets/apparel5.png";
import apparel6 from "../assets/apparel6.png";
import apparel7 from "../assets/apparel7.png";
import apparel8 from "../assets/apparel8.png";

const products = [
  {
    id: 1,
    name: "Pet Toy Ball",
    description: "A fun and durable toy ball for pets.",
    price: 10.99,
    image: { toyball },
    category: "Toys",
  },
  {
    id: 2,
    name: "Yellow Duck",
    description: "High-quality toy for your pets.",
    price: 5.99,
    image: { yellowduck },
    category: "Toys",
  },
  {
    id: 3,
    name: "Pet Cat Tunnel",
    description:
      "Pet Cat Tunnel Toys Kitty Training Interactive Toy With Bell For Small Animal.",
    price: 10.68,
    image: { catTunnel },
    category: "Toys",
  },
  {
    id: 4,
    name: "BULLYMAKE Horseshoe",
    description:
      "Designed for power chewers - All BULLYMAKE toys are uniquely designed for the power chewer. The textures and materials are perfect for dogs who love to chew!",
    price: 23.99,
    image: { horseShoe },
    category: "Toys",
  },
  {
    id: 5,
    name: "Rubber Toy",
    description:
      "Orange made of natural rubber. Toy dimensions is 9 in * 1.8 in. It is fit for Medium Dogs about 30lbs to 60lbs dogs, not for extra dogs.",
    price: 7.99,
    image: { rubber },
    category: "Toys",
  },
  {
    id: 6,
    name: "SmartyKat Hot Pursuit",
    description:
      "Featuring lights and a feathered wand that flits and zips underneath the rustling fabric in fast unpredictable spinning movements with all but the feather tips concealed, driving your cat crazy and engaging them in fun, exciting play",
    price: 23.99,
    image: { kong },
    category: "Toys",
  },
  {
    id: 7,
    name: "Chuckit Ultra Ball",
    description:
      "The Ultra Ball is made of durable rubber yielding an ultra bouncy, exciting fetch experience on land or on water thanks to lightweight, bouyant design. Compatible with size Small Chuckit Launchers.",
    price: 5.21,
    image: { orangeball },
    category: "Toys",
  },
  {
    id: 8,
    name: "Wooden Hanging Swing",
    description:
      "Wooden hanging swing cage toy with bell hamster small pet animal toy bed.",
    price: 12.99,
    image: { woodenHangingSwing },
    category: "Toys",
  },
  {
    id: 9,
    name: "Sound Supplie",
    description: "Animal sound pet supplies.",
    price: 12.99,
    image: { soundSupplie },
    category: "Toys",
  },
  {
    id: 10,
    name: "Doggy Delight Chicken Kibble",
    description:
      "A crunchy, protein-packed kibble made from real chicken, perfect for active dogs. Enriched with essential vitamins and minerals for healthy growth.",
    price: 18.99,
    image: { food1 },
    category: "Food",
  },
  {
    id: 11,
    name: "Whisker-Lickin' Salmon Feast",
    description:
      "A gourmet salmon recipe, packed with omega-3s for a healthy coat. Made with real salmon, this meal is sure to keep your cat purring with satisfaction.",
    price: 13.99,
    image: { food2 },
    category: "Food",
  },
  {
    id: 12,
    name: "Beefy Bites Grain-Free Dog Food",
    description:
      "A grain-free dog food that’s rich in beef and vegetables. Ideal for dogs with sensitive stomachs, providing a balanced and nutritious meal without fillers.",
    price: 14.99,
    image: { food3 },
    category: "Food",
  },
  {
    id: 13,
    name: "Tuna Temptations Cat Food",
    description:
      "A flavor-packed meal featuring tender tuna pieces, fortified with taurine for heart health. Great for picky eaters who crave the taste of the ocean.",
    price: 16.29,
    image: { food4 },
    category: "Food",
  },
  {
    id: 14,
    name: "Lamb & Potato Gourmet Dog Food",
    description:
      "A premium blend of lamb and potato, formulated to support digestion and a shiny coat. The perfect choice for dogs with food sensitivities.",
    price: 12.49,
    image: { food5 },
    category: "Food",
  },
  {
    id: 15,
    name: "Chicken & Turkey Feline Feast",
    description:
      "A savory mix of chicken and turkey designed for cats of all ages. Packed with lean protein to support muscle development and overall health.",
    price: 13.79,
    image: { food6 },
    category: "Food",
  },
  {
    id: 16,
    name: "Paws & Claws Pet Hoodie",
    description:
      "A cozy, stylish hoodie designed for your pet’s comfort. Made from soft, breathable fabric, it features a hood and ribbed cuffs. Perfect for chilly walks or lounging around.",
    price: 21.09,
    image: { apparel1 },
    category: "Apparel",
  },
  {
    id: 17,
    name: "Furry Friends Bandana",
    description:
      "Add a touch of flair to your pet’s look with this vibrant bandana. Made from durable, high-quality fabric with a variety of fun patterns, it’s a must-have accessory for any fashionable pet.",
    price: 17.29,
    image: { apparel2 },
    category: "Apparel",
  },
  {
    id: 18,
    name: "Canine Comfort Vest",
    description:
      "A lightweight, breathable vest designed for active dogs. Made from moisture-wicking material, it’s perfect for outdoor adventures and provides an extra layer of protection.",
    price: 21.99,
    image: { apparel3 },
    category: "Apparel",
  },
  {
    id: 19,
    name: "Whisker Wear  Sweater",
    description:
      "A snug and warm sweater for dogs, made from soft, stretchy material. It features a stylish knit pattern and is available in various colors to suit your feline’s personality.",
    price: 21.99,
    image: { apparel4 },
    category: "Apparel",
  },
  {
    id: 20,
    name: "Posh Paws Quilted Jacket",
    description:
      "A fashionable quilted jacket with a faux fur trim, offering both warmth and style. Ideal for cooler weather, it’s designed to keep your pet comfortable and looking chic.",
    price: 23.29,
    image: { apparel5 },
    category: "Apparel",
  },
  {
    id: 21,
    name: "Stylish Pet Bow Tie",
    description:
      "Elevate your pet’s look with this classic bow tie. Made from high-quality fabric, it features an adjustable strap for a perfect fit and comes in various patterns and colors to match any occasion",
    price: 20.99,
    image: { apparel6 },
    category: "Apparel",
  },
  {
    id: 22,
    name: "Sporty Pet Tracksuit",
    description:
      "This trendy tracksuit is perfect for the active pet. Made from stretchy, breathable fabric, it includes a zippered jacket and matching pants. Ideal for a jog in the park or a playdate with friends.",
    price: 21.99,
    image: { apparel7 },
    category: "Apparel",
  },
  {
    id: 23,
    name: "Elegant Pet Sweater",
    description:
      "Add a touch of elegance to your pet's wardrobe with this stylish sweater. Crafted from soft, knitted fabric, it features a ribbed collar and cuffs for a snug fit. Available in multiple colors and patterns to suit any pet's personality.",
    price: 27.09,
    image: { apparel8 },
    category: "Apparel",
  },
];

export default products;
