'use client';

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import FilteringProducts from "@/components/filtering/filter";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [range, setRange] = useState(1000);

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
    const inCategory =
      !selectedCategory || product.category === selectedCategory;
    const inPrice = product.price <= range;
    return inCategory && inPrice;
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <div className="flex flex-col sm:flex-row p-6 gap-6">
        <FilteringProducts
          categories={uniqueCategories}
          selectedCategory={selectedCategory}
          toggleCategory={toggleCategory}
          range={range}
          setRange={setRange}
        />

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg text-center">
              <Image
                src={
                  product.images.length > 0
                    ? product.images[0]
                    : product.thumbnail
                }
                alt={product.title}
                height={200}
                width={200}
                className="mx-auto object-contain"
              />
              <h3 className="mt-2 font-semibold">{product.title}</h3>
              <p className="text-blue-300 font-bold">₹ {product.price}</p>
              <p className="text-sm text-gray-400 mb-2">⭐ {product.rating}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </main>
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-red-500 mt-10 text-lg font-semibold">
          Price too low — no items found!
        </p>
      )}

      <Footer />
    </div>
  );
}
