import React from 'react';
import MenProduct from '../../components/MenProducts';

// Centralized jewelry product data with category information
const productCategories = {
  Rings: [
    {
      img: "/assets/ring1.png",
      title: "Elegant Solitaire Ring",
      desc: "Classic 14k white gold ring with a brilliant-cut diamond, perfect for engagements.",
      rating: 5,
      price: "$1,299"
    },
    {
      img: "/assets/ring2.png",
      title: "Vintage Rose Gold Band",
      desc: "Intricate rose gold ring with delicate filigree design and milgrain edges.",
      rating: 4,
      price: "$799"
    },
    {
      img: "/assets/ring3.png",
      title: "Emerald Cocktail Ring",
      desc: "Statement ring featuring a rich emerald stone surrounded by pavé diamonds.",
      rating: 5,
      price: "$2,499"
    },
    {
      img: "/assets/ring4.png",
      title: "Minimalist Silver Band",
      desc: "Sleek sterling silver ring with a brushed matte finish, perfect for everyday wear.",
      rating: 4,
      price: "$249"
    },
    {
      img: "/assets/ring5.png",
      title: "Sapphire Halo Ring",
      desc: "Stunning sapphire center stone encircled by sparkling conflict-free diamonds.",
      rating: 5,
      price: "$1,899"
    }
  ],
  Necklaces: [
    {
      img: "/assets/necklace1.png",
      title: "Diamond Pendant",
      desc: "Delicate solitaire diamond pendant on a fine white gold chain.",
      rating: 5,
      price: "$1,599"
    },
    {
      img: "/assets/necklace2.png",
      title: "Pearl Strand Necklace",
      desc: "Classic Akoya pearl necklace with a sterling silver clasp, timeless elegance.",
      rating: 4,
      price: "$799"
    },
    {
      img: "/assets/necklace3.png",
      title: "Layered Gold Necklace",
      desc: "Modern 18k gold multi-strand necklace with geometric pendant.",
      rating: 5,
      price: "$1,299"
    },
    {
      img: "/assets/necklace4.png",
      title: "Birthstone Locket",
      desc: "Personalized silver locket with your choice of birthstone, perfect gift.",
      rating: 4,
      price: "$349"
    },
    {
      img: "/assets/necklace5.png",
      title: "Celestial Star Pendant",
      desc: "Intricate constellation-inspired pendant with micro-set diamonds.",
      rating: 5,
      price: "$1,099"
    }
  ],
  Earrings: [
    {
      img: "/assets/earring1.png",
      title: "Diamond Stud Earrings",
      desc: "Classic round brilliant-cut diamond studs in 14k white gold.",
      rating: 5,
      price: "$1,499"
    },
    {
      img: "/assets/earring2.png",
      title: "Drop Pearl Earrings",
      desc: "Elegant South Sea pearl drop earrings with diamond accents.",
      rating: 4,
      price: "$1,799"
    },
    {
      img: "/assets/earring3.png",
      title: "Geometric Gold Hoops",
      desc: "Modern 18k gold geometric hoop earrings with architectural design.",
      rating: 5,
      price: "$899"
    },
    {
      img: "/assets/earring4.png",
      title: "Vintage Emerald Studs",
      desc: "Art deco-inspired emerald stud earrings set in platinum.",
      rating: 4,
      price: "$2,299"
    },
    {
      img: "/assets/earring5.png",
      title: "Minimalist Silver Drops",
      desc: "Contemporary sterling silver earrings with clean, fluid lines.",
      rating: 5,
      price: "$399"
    }
  ],
  Bracelets: [
    {
      img: "/assets/bracelet1.png",
      title: "Tennis Bracelet",
      desc: "Timeless diamond tennis bracelet with brilliant round diamonds.",
      rating: 5,
      price: "$3,499"
    },
    {
      img: "/assets/bracelet2.png",
      title: "Gold Chain Bracelet",
      desc: "Luxurious 18k gold Cuban link bracelet with substantial weight.",
      rating: 4,
      price: "$2,799"
    },
    {
      img: "/assets/bracelet3.png",
      title: "Charm Bracelet",
      desc: "Sterling silver charm bracelet with customizable personal charms.",
      rating: 5,
      price: "$599"
    },
    {
      img: "/assets/bracelet4.png",
      title: "Gemstone Bangle",
      desc: "Delicate rose gold bangle with alternating sapphire and diamond sections.",
      rating: 4,
      price: "$1,699"
    },
    {
      img: "/assets/bracelet5.png",
      title: "Minimalist Silver Cuff",
      desc: "Contemporary open cuff bracelet with brushed silver finish.",
      rating: 5,
      price: "$449"
    }
  ]
};

const JewelryProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className='container pt-16'>
        {Object.entries(productCategories).map(([category, products]) => (
          <div key={category} className="mb-16">
            <h1 className='pb-8 text-center text-4xl font-serif text-gray-800'>
              <span className='text-rose-600'>━━</span> {category} <span className='text-rose-600'>━━</span>
            </h1>
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-1 lg:grid-cols-2 lg:place-items-center xl:grid-cols-4 gap-10 xl:gap-20 xl:gap-y-10'>
              {products.map((product, index) => (
                <MenProduct
                  key={`${category}-${index}`}
                  img={product.img}
                  title={product.title}
                  desc={product.desc}
                  rating={product.rating}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryProductsPage;