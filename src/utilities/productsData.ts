import shorts from '../assets/images/short-pants.png'
import louboutin from '../assets/images/louboutin.png'
import  fur from '../assets/images/fur-coat.png'
import backpack from '../assets/images/backpack.png'
import trolley from '../assets/images/baggage-trolley.png'
import cap from '../assets/images/baseball-cap.png'
import boots from '../assets/images/boots.png'
import hoodie from '../assets/images/hoodie.png'
import joggers from '../assets/images/joggers.png'
import socks from '../assets/images/pair-socks.png'
import sweater from '../assets/images/sweater.png'
import vans from '../assets/images/vans.png'
import bag from '../assets/images/women-bag.png'


export interface productDataType{
  id: number;
  productName: string;
  price: string;
  description: string;
  img: string;
  isAvailable: boolean;
}



const ProductData: productDataType[] =  [
    {
      id: 0,
      productName: "Sansik Bag",
      price: "$2,570.39",
      description: "Dolore id nulla dolor commodo ea mollit qui. Est ex consequat occaecat sint cillum adipisicing sit veniam. Adipisicing et sint cupidatat adipisicing nisi enim voluptate velit reprehenderit est esse. Officia nulla cillum ut in culpa ex do occaecat non nisi ipsum duis consectetur.",
      img: bag,
      isAvailable: true,
    },
    {
      id: 1,
      productName: "Black Louboutin",
      price: "$1,062.41",
      description: "Culpa quis exercitation Lorem laboris officia cupidatat duis reprehenderit. Et quis sit minim reprehenderit non tempor ea quis in reprehenderit nisi. Est laborum qui ad sit ea ipsum consequat Lorem proident amet eu.",
      img: louboutin,
      isAvailable: true,
    },
    {
      id: 2,
      productName: "Woly Sweater",
      price: "$2,157.01",
      description: "Cupidatat veniam sit dolore duis cillum anim dolor ea deserunt minim aliqua. Exercitation eu cillum id officia enim eu cillum deserunt laboris Lorem laboris duis. Quis tempor deserunt consequat commodo irure commodo labore labore.",
      img: sweater,
      isAvailable: false
    },
   
    {
      id: 3,
      productName: "Olbe Backpack",
      price: "$2,038.77",
      description: "Voluptate minim voluptate et sint enim cupidatat dolor amet in nulla tempor. Sint magna sunt et excepteur nostrud excepteur proident nostrud culpa. In do laborum anim labore nisi magna nostrud non velit excepteur labore id amet. Deserunt consequat quis et Lorem enim amet sint tempor. Officia deserunt sint mollit nulla. Voluptate ad ipsum quis duis ex laborum nisi duis labore aliqua nisi eiusmod quis. Amet ex non excepteur velit eu magna occaecat ut.",
      img: backpack,
      isAvailable: false
    },
    {
      id: 4,
      productName: "Mines Black Boot",
      price: "$3,135.35",
      description: "Do id quis qui occaecat incididunt minim ipsum fugiat commodo labore laborum ullamco ut sunt. Nisi non sunt pariatur irure est tempor dolore occaecat eu cupidatat. Consequat do exercitation aute fugiat sit minim voluptate eiusmod labore consectetur est.",
      img: boots,
      isAvailable: false
    },
    {
      id: 5,
      productName: "Fendi Black Trolley",
      price: "$3,420.27",
      description: "Fugiat ipsum aliqua fugiat ullamco anim. Aute ipsum in labore nisi sunt Lorem irure aute ea. Deserunt cillum commodo laboris aliqua id mollit nostrud duis dolore voluptate. Do ut veniam elit aute ad ea veniam et Lorem. Exercitation in do ullamco aliqua ad occaecat sunt.",
      img: trolley,
      isAvailable: true
    },
    {
      id: 6,
      productName: "Crown Base Cap",
      price: "$1,216.79",
      description: "Laboris ad pariatur exercitation sunt aliquip irure consequat id aliquip amet ullamco. Eiusmod exercitation qui irure eu cillum aliqua et enim enim ipsum deserunt fugiat adipisicing. Esse ipsum aliqua amet sint elit ullamco. Exercitation voluptate culpa veniam pariatur nulla fugiat cillum. Tempor ut et aliqua laborum laboris do aliquip dolor. Est quis sit cillum nostrud. Cupidatat in sint commodo pariatur laboris voluptate aute labore ad est sint magna consequat deserunt.",
      img: cap,
      isAvailable: true
    },
    {
      id: 7,
      productName: "Xol Blac hoodie",
      price: "$3,949.69",
      description: "Pariatur in officia ad in mollit deserunt. Nostrud cupidatat aliquip cillum excepteur elit ipsum laborum laboris nisi commodo aliquip adipisicing. Sint Lorem labore enim enim excepteur proident minim ad veniam eu voluptate proident dolore id. Cillum ut pariatur quis dolore est eu ullamco. Non nostrud laborum adipisicing adipisicing et.",
      img: hoodie,
      isAvailable: false
    },
    {
      id: 8,
      productName: "Bim Joggers",
      price: "$2,579.53",
      description: "Irure reprehenderit dolor ut ut deserunt ut id adipisicing irure. Eiusmod elit excepteur laborum deserunt dolor occaecat sint aliqua nostrud ipsum mollit qui consectetur in. Fugiat ut est non sint commodo. Commodo eiusmod eiusmod aliqua magna. Lorem excepteur magna quis nulla dolore laboris laboris laborum eiusmod officia magna aliqua laboris dolor. Labore fugiat occaecat ad consequat elit anim ut Lorem.",
      img: joggers,
      isAvailable: false
    },
    {
      id: 9,
      productName: "Office Socks",
      price: "$3,492.15",
      description: "Ullamco nostrud anim esse id tempor eiusmod eu dolore sunt. Cillum aliqua officia eiusmod reprehenderit laborum anim incididunt deserunt ullamco nostrud ullamco voluptate eu sint. Labore aliquip ad commodo irure pariatur elit adipisicing ea duis amet mollit incididunt. Veniam occaecat deserunt labore labore reprehenderit ex aliqua duis laborum elit. Adipisicing Lorem dolor esse laborum elit deserunt incididunt laboris incididunt velit laborum do Lorem. Sint deserunt consequat Lorem nisi irure veniam magna id fugiat culpa. Reprehenderit id et proident magna Lorem est nostrud ut aute laboris ipsum fugiat.",
      img:socks,
      isAvailable: false
    },
    {
      id: 10,
      productName: "Fur Coat",
      price: "$2,693.38",
      description: "Officia mollit et nostrud irure sit est adipisicing sit id laboris ad cupidatat ipsum. Pariatur enim aliqua dolore exercitation fugiat veniam qui nulla eu voluptate qui dolor veniam anim. Minim proident sint sint nisi reprehenderit irure sint. Adipisicing velit in ullamco nisi ea nostrud ea laboris velit tempor veniam occaecat exercitation voluptate. Voluptate velit labore tempor enim enim laborum. Pariatur ex ullamco proident do veniam esse.",
      img: fur,
      isAvailable: false
    },
    {
      id: 11,
      productName: "OlbeXnike Vans",
      price: "$1,054.22",
      description: "In do laborum anim labore nisi magna nostrud non velit excepteur labore id amet. Deserunt consequat quis et Lorem enim amet sint tempor. Officia deserunt sint mollit nulla. Voluptate minim voluptate et sint enim cupidatat dolor amet in nulla tempor. Sint magna sunt et excepteur nostrud excepteur. Voluptate ad ipsum quis duis ex laborum nisi duis labore aliqua nisi eiusmod quis. Amet ex non excepteur velit eu magna occaecat ut.",
      img: vans,
      isAvailable: false
    }
  ]

  export default ProductData