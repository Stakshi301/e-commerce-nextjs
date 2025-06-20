'use client';

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import FilteringProducts from "@/components/filtering/filter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchProducts();
  }, []);

  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  const toggleCategory = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const filteredProducts = products.filter((product) => {
    const inCategory = !selectedCategory || product.category === selectedCategory;
    const inPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const inSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return inCategory && inPrice && inSearch;
  });

  return (
    <div className="bg-white text-black min-h-screen">
      <Header onSearch={setSearchQuery} />

      <h1 className="text-center text-blue-900 font-bold text-4xl py-6">
        Product Listing
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 px-6 pb-10">
        {/* Filter Sidebar */}
        <div className="lg:w-1/4">
          <FilteringProducts
            categories={uniqueCategories}
            selectedCategory={selectedCategory}
            toggleCategory={toggleCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* Product Grid */}
        <main className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border shadow-md p-4 rounded-lg text-center">
                <Image
                  src={product.images.length > 0 ? product.images[0] : product.thumbnail}
                  alt={product.title}
                  height={200}
                  width={200}
                  className="mx-auto object-contain"
                />
                <h3 className="mt-2 font-semibold">{product.title}</h3>
                <p className="text-blue-500 font-bold">₹ {product.price}</p>
                <p className="text-sm text-gray-500 mb-2">⭐ {product.rating}</p>
                <button
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.title} added to cart!`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* No Items Message */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-red-500 font-semibold text-xl mt-10">
              {
                searchQuery ? "No items found for this search!" :
                priceRange[1] < 200 ? "Price too low — no items found!" :
                priceRange[0] > 900 ? "Price too high — no items found!" :
                selectedCategory ? "No items found for this filter!" :
                "No products available!"
              }
            </p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
