import React from 'react';
import MenProduct from '../../components/MenProducts';

// Centralized perfume product data with category information
const productCategories = {
  'Men\'s Fragrances': [
    {
      img: "/assets/perfume1.png",
      title: "Midnight Noir",
      desc: "A bold, sophisticated cologne with notes of bergamot, black pepper, and sandalwood.",
      rating: 5,
      price: "$89"
    },
    {
      img: "/assets/perfume2.png",
      title: "Ocean Breeze",
      desc: "Fresh aquatic fragrance with hints of marine notes, citrus, and light musk.",
      rating: 4,
      price: "$75"
    },
    {
      img: "/assets/perfume3.png",
      title: "Timber Woods",
      desc: "Warm, woody scent featuring cedar, pine, and a touch of vanilla.",
      rating: 5,
      price: "$95"
    },
    {
      img: "/assets/perfume4.png",
      title: "Urban Spirit",
      desc: "Modern, intense fragrance with spicy undertones and a crisp leather base.",
      rating: 4,
      price: "$85"
    },
    {
      img: "/assets/perfume5.png",
      title: "Citrus Spark",
      desc: "Energetic daytime fragrance with bright citrus and green herbal notes.",
      rating: 5,
      price: "$69"
    }
  ],
  'Women\'s Fragrances': [
    {
      img: "/assets/perfume6.png",
      title: "Moonlight Elegance",
      desc: "Delicate floral fragrance with jasmine, rose, and soft musk undertones.",
      rating: 5,
      price: "$99"
    },
    {
      img: "/assets/perfume7.png",
      title: "Tropical Dream",
      desc: "Exotic blend of orchid, passion fruit, and warm vanilla.",
      rating: 4,
      price: "$85"
    },
    {
      img: "/assets/perfume8.png",
      title: "Velvet Noir",
      desc: "Rich, sensual fragrance with dark chocolate, cherry, and patchouli.",
      rating: 5,
      price: "$109"
    },
    {
      img: "/assets/perfume9.png",
      title: "Fresh Blossom",
      desc: "Light, fresh scent with notes of peony, lily, and clean musk.",
      rating: 4,
      price: "$79"
    },
    {
      img: "/assets/perfume10.png",
      title: "Golden Hour",
      desc: "Warm, golden fragrance with amber, bergamot, and soft woods.",
      rating: 5,
      price: "$94"
    }
  ],
  'Luxury Collections': [
    {
      img: "/assets/perfume11.png",
      title: "Celestial Essence",
      desc: "Limited edition luxury fragrance with rare botanical extracts.",
      rating: 5,
      price: "$249"
    },
    {
      img: "/assets/perfume12.png",
      title: "Royal Elixir",
      desc: "Prestigious blend of exotic spices and precious woods.",
      rating: 5,
      price: "$299"
    },
    {
      img: "/assets/perfume13.png",
      title: "Midnight Oud",
      desc: "Exclusive fragrance featuring rare Arabian oud and saffron.",
      rating: 4,
      price: "$219"
    },
    {
      img: "/assets/perfume14.png",
      title: "Imperial Blanc",
      desc: "Ultra-rare white musk and lotus flower composition.",
      rating: 5,
      price: "$279"
    },
    {
      img: "/assets/perfume15.png",
      title: "Artisan's Reserve",
      desc: "Hand-crafted perfume with meticulously sourced natural ingredients.",
      rating: 4,
      price: "$199"
    }
  ]
};

const PerfumeProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className='container pt-16'>
        {Object.entries(productCategories).map(([category, products]) => (
          <div key={category} className="mb-16">
            <h1 className='pb-8 text-center text-4xl font-light tracking-wide text-gray-800'>
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

export default PerfumeProductsPage;