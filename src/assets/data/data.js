import iPhone_11 from '../img/iPhone_11_Pro.png';
import iPhone_XR from '../img/iPhone_XR_blue.png';
import S21_Ultra from '../img/S21_Ultra.png';
import iPhone_XS from '../img/iPhone_XS.png';
import M1_Air from '../img/Macbook_Air_M1.png';
import Spectre_360 from '../img/HP_Spectre_X360.png';

const product = [
  {
    product_name: "iPhone XR",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    currency: "$",
    price: 400,
    product_quantity: 1,
    img_main: `${iPhone_XR}`,
    images: [
      "",
      "",
      ""
    ],
    rating: 3,
    product_model: [
      "256GB",
      "512GB"
    ],
    reviews: [
      {
        user: "Cole",
        rating: 4,
        avatar_url: "",
        review: "The product was great!",
        created_at: "2021-09-27"
      },
      {
        user: "Sam",
        rating: 2,
        avatar_url: "",
        review: "The product was bad!",
        created_at: "2021-09-27"
      },
      {
        user: "Joyce",
        rating: 4,
        avatar_url: "",
        review: "The product was awesome!",
        created_at: "2021-09-27"
      }
    ]
  },
  {
    product_name: "iPhone XS",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    currency: "$",
    price: 700,
    product_quantity: 1,
    img_main: `${iPhone_XS}`,
    images: [
      "",
      "",
      ""
    ],
    rating: 3,
    product_model: [
      "256GB",
      "512GB"
    ],
    reviews: [
      {
        user: "Daniel",
        rating: 4,
        avatar_url: "",
        review: "The product was great!",
        created_at: "2021-09-27"
      },
      {
        user: "Frank",
        rating: 2,
        avatar_url: "",
        review: "The product was bad!",
        created_at: "2021-09-27"
      },
      {
        user: "Axelle",
        rating: 4,
        avatar_url: "",
        review: "The product was awesome!",
        created_at: "2021-09-27"
      }
    ]
  },
  {
    product_name: "iPhone 11 Pro",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    currency: "$",
    price: 600,
    product_quantity: 1,
    img_main: `${iPhone_11}`,
    images: [
      "",
      "",
      ""
    ],
    rating: 3,
    product_model: [
      "256GB",
      "512GB"
    ],
    reviews: [
      {
        user: "Musa",
        rating: 4,
        avatar_url: "",
        review: "The product was great!",
        created_at: "2021-09-27"
      },
      {
        user: "Peter",
        rating: 2,
        avatar_url: "",
        review: "The product was bad!",
        created_at: "2021-09-27"
      },
      {
        user: "Govindha",
        rating: 4,
        avatar_url: "",
        review: "The product was awesome!",
        created_at: "2021-09-27"
      }
    ]
  },
  {
    product_name: "Macbook Air M1",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    currency: "$",
    price: 999,
    product_quantity: 1,
    img_main: `${M1_Air}`,
    images: [
      "",
      "",
      ""
    ],
    rating: 4.5,
    product_model: [
      "256GB",
      "512GB"
    ],
    reviews: [
      {
        user: "Danielson",
        rating: 4,
        avatar_url: "",
        review: "The product was great!",
        created_at: "2021-09-27"
      },
      {
        user: "Peter",
        rating: 2,
        avatar_url: "",
        review: "The product was bad!",
        created_at: "2021-09-27"
      },
      {
        user: "Govindha",
        rating: 4,
        avatar_url: "",
        review: "The product was awesome!",
        created_at: "2021-09-27"
      }
    ]
  }, 
  {
    product_name: "Samsung S21 Ultra",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    currency: "$",
    price: 1499,
    product_quantity: 1,
    img_main: `${S21_Ultra}`,
    images: [
      "",
      "",
      ""
    ],
    rating: 4.5,
    product_model: [
      "256GB",
      "512GB"
    ],
    reviews: [
      {
        user: "Danielson",
        rating: 4,
        avatar_url: "",
        review: "The product was great!",
        created_at: "2021-09-27"
      },
      {
        user: "Peter",
        rating: 2,
        avatar_url: "",
        review: "The product was bad!",
        created_at: "2021-09-27"
      },
      {
        user: "Govindha",
        rating: 4,
        avatar_url: "",
        review: "The product was awesome!",
        created_at: "2021-09-27"
      }
    ]
  },
  {
    product_name: "HP Spectre X360",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    currency: "$",
    price: 2299,
    product_quantity: 1,
    img_main: `${Spectre_360}`,
    images: [
      "",
      "",
      ""
    ],
    rating: 4.5,
    product_model: [
      "256GB",
      "512GB"
    ],
    reviews: [
      {
        user: "Danielson",
        rating: 4,
        avatar_url: "",
        review: "The product was great!",
        created_at: "2021-09-27"
      },
      {
        user: "Peter",
        rating: 2,
        avatar_url: "",
        review: "The product was bad!",
        created_at: "2021-09-27"
      },
      {
        user: "Govindha",
        rating: 4,
        avatar_url: "",
        review: "The product was awesome!",
        created_at: "2021-09-27"
      }
    ]
  }
]


const categories = [
  {
    name: "Mobile Phones",
    category_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!"
  },
  {
    name: "Laptops",
    category_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!"
  },
  {
    name: "Video Game Consoles",
    category_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!"
  },
  {
    name: "Tablets",
    category_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!"
  },
]


export default {product, categories};