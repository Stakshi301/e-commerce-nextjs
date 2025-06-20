'use client';

import { Range } from 'react-range';

const MIN = 0;
const MAX = 1000;

export default function CacyroyProducts({
  categories,
  selectedCategory,
  toggleCategory,
   priceRange,
  setPriceRange,
}) {
  return (
    <aside className="bg-blue-100 p-6 rounded-md shadow-md w-full sm:w-64 mb-6 sm:mb-0">
        <div className='bg-[#0858A8] p-4 rounded-2xl'>
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-6">
        <h4 className="font-medium mb-2">Category</h4>

               <button
      onClick={() => toggleCategory(null)}
      className={`px-4 py-2 flex m-2 w-28 rounded-full  border text-sm capitalize ${
        selectedCategory === null
          ? 'bg-black text-white'
          : 'bg-white text-black'
      }`}
    >
      All
    </button>

           {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-4 py-2 flex m-2 w-28 rounded-full border text-sm  capitalize ${
              selectedCategory === category
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        <label className="block mb-1 font-medium">
        Price: ₹{priceRange[0]} - ₹{priceRange[1]}
      </label>
      <Range
        step={10}
        min={MIN}
        max={MAX}
        values={priceRange}
        onChange={(values) => setPriceRange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full bg-gray-300 rounded"
            style={{ ...props.style }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-4 w-4 bg-blue-100 rounded-full"
          />
        )}
      />
    </div>
    </div>
    </aside>
  );
}
