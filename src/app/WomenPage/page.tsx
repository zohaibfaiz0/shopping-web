import React from 'react';
import MenProduct from '../../components/MenProducts';

// Centralized women's product data with category information
const productCategories = {
  Dresses: [
    {
      img: "/assets/dress1.png",
      title: "Evening Elegance Gown",
      desc: "Elegant floor-length dress with delicate sequin embellishments, ideal for formal events.",
      rating: 5,
      price: "$249"
    },
    {
      img: "/assets/dress2.png",
      title: "Floral Summer Maxi",
      desc: "Lightweight chiffon dress with vibrant floral print, perfect for daytime events.",
      rating: 4,
      price: "$129"
    },
    {
      img: "/assets/dress3.png",
      title: "Cocktail Wrap Dress",
      desc: "Sophisticated jersey wrap dress in deep burgundy, versatile for work and evening.",
      rating: 5,
      price: "$189"
    },
    {
      img: "/assets/dress4.png",
      title: "Minimalist Black Dress",
      desc: "Classic little black dress with clean lines and subtle architectural details.",
      rating: 4,
      price: "$169"
    },
    {
      img: "/assets/dress5.png",
      title: "Boho Chic Midi",
      desc: "Romantic bohemian-style dress with delicate lace and flutter sleeves.",
      rating: 5,
      price: "$139"
    }
  ],
  Tops: [
    {
      img: "/assets/top1.png",
      title: "Silk Blouse",
      desc: "Luxurious silk blouse with subtle sheen, perfect for professional settings.",
      rating: 5,
      price: "$99"
    },
    {
      img: "/assets/top2.png",
      title: "Knit Sweater",
      desc: "Soft cashmere blend sweater in a relaxed fit, ideal for layering.",
      rating: 4,
      price: "$79"
    },
    {
      img: "/assets/top3.png",
      title: "Crop Top",
      desc: "Trendy ribbed crop top with statement sleeves, perfect for casual outings.",
      rating: 5,
      price: "$49"
    },
    {
      img: "/assets/top4.png",
      title: "Blazer",
      desc: "Tailored blazer in classic navy, elevates any professional ensemble.",
      rating: 4,
      price: "$129"
    },
    {
      img: "/assets/top5.png",
      title: "Flowy Blouse",
      desc: "Lightweight chiffon blouse with elegant draping and soft pastel color.",
      rating: 5,
      price: "$89"
    }
  ],
  Jeans: [
    {
      img: "/assets/jeans1.png",
      title: "High-Waist Skinny Jeans",
      desc: "Stretch denim with perfect fit, comfortable for all-day wear.",
      rating: 5,
      price: "$89"
    },
    {
      img: "/assets/jeans2.png",
      title: "Wide-Leg Denim",
      desc: "Trendy wide-leg jeans with vintage-inspired wash and high waist.",
      rating: 4,
      price: "$99"
    },
    {
      img: "/assets/jeans3.png",
      title: "Distressed Boyfriend Jeans",
      desc: "Relaxed-fit jeans with artful distressing, casual weekend essential.",
      rating: 5,
      price: "$79"
    },
    {
      img: "/assets/jeans4.png",
      title: "Classic Straight Leg",
      desc: "Timeless straight-leg jeans in dark wash, versatile for multiple occasions.",
      rating: 4,
      price: "$85"
    },
    {
      img: "/assets/jeans5.png",
      title: "Cropped Flare Jeans",
      desc: "Modern cropped flare style that flatters every body type.",
      rating: 5,
      price: "$95"
    }
  ],
  Accessories: [
    {
      img: "/assets/acc1.png",
      title: "Leather Tote",
      desc: "Spacious genuine leather tote with elegant hardware and multiple compartments.",
      rating: 5,
      price: "$199"
    },
    {
      img: "/assets/acc2.png",
      title: "Silk Scarf",
      desc: "Luxurious silk scarf with intricate print, perfect for adding elegance to any outfit.",
      rating: 4,
      price: "$79"
    },
    {
      img: "/assets/acc3.png",
      title: "Statement Necklace",
      desc: "Bold gold-tone necklace with geometric pendant, elevates simple looks.",
      rating: 5,
      price: "$89"
    },
    {
      img: "/assets/acc4.png",
      title: "Sunglasses",
      desc: "Oversized designer sunglasses with premium polarized lenses.",
      rating: 4,
      price: "$149"
    },
    {
      img: "/assets/acc5.png",
      title: "Leather Belt",
      desc: "Slim leather belt with gold buckle, perfect for cinching waists.",
      rating: 5,
      price: "$59"
    }
  ]
};

const WomenProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className='container pt-16'>
        {Object.entries(productCategories).map(([category, products]) => (
          <div key={category} className="mb-16">
            <h1 className='pb-6 text-center text-4xl font-light text-gray-800'>
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

export default WomenProductsPage;