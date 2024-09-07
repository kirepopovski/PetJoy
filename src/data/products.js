// src/data/products.js
import toyball from "../assets/toyball.jpeg";
import yellowduck from "../assets/yellowduck.jpg";
import catTunnel from "../assets/catTunnel.png";
import horseShoe from "../assets/horseShoe.jpg";
import rubberCarrot from "../assets/rubberCarrot.jpg";
import smartyCat from "../assets/smartyCat.jpg";
import ultraBall from "../assets/ultraBall.jpg";
import woodenHangingSwing from "../assets/woodenHangingSwing.jpg";
import soundSupplie from "../assets/soundSupplie.jpg";

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
    name: "Rubber Carrot",
    description:
      "Green Leaves made of no stuffing plush with crinkle paper inside. Orange Carrot Body made of natural rubber. Toy dimensions is 9 in * 1.8 in. It is fit for Medium Dogs about 30lbs to 60lbs dogs, not for extra dogs.",
    price: 7.99,
    image: { rubberCarrot },
    category: "Toys",
  },
  {
    id: 6,
    name: "SmartyKat Hot Pursuit",
    description:
      "Featuring lights and a feathered wand that flits and zips underneath the rustling fabric in fast unpredictable spinning movements with all but the feather tips concealed, driving your cat crazy and engaging them in fun, exciting play",
    price: 23.99,
    image: { smartyCat },
    category: "Toys",
  },
  {
    id: 7,
    name: "Chuckit Ultra Ball",
    description:
      "Super High Bounce: Better than standard tennis balls, the Ultra Ball is made of durable rubber yielding an ultra bouncy, exciting fetch experience on land or on water thanks to lightweight, bouyant design. Compatible with size Small Chuckit Launchers.",
    price: 5.21,
    image: { ultraBall },
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
];

export default products;
