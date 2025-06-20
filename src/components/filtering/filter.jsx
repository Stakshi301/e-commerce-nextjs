'use client';

import { Range } from 'react-range';

const MIN = 0;
const MAX = 1000;

export default function FilteringProducts({
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
        values={[priceRange[0],priceRange[1]]}
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
        renderThumb={({ props }) => {
  const { key, ...rest } = props;
  return (
    <div
      key={key}
      {...rest}
      className="h-4 w-4 bg-blue-100 rounded-full"
    />
  );
}}
      />
    </div>
    </div>



    <div className="bg-white text-black shadow-md rounded-lg p-4 mt-8 w-full">
  <h3 className="font-bold text-lg mb-4">Cacyroy</h3>

  {/* Category Radios */}
  <div className="mb-4">
    <label className="flex items-center mb-2">
      <input
        type="radio"
        name="cacyroy-category"
        checked={selectedCategory === null}
        onChange={() => toggleCategory(null)}
        className="mr-2"
      />
      All
    </label>

    {categories.map((category) => (
      <label key={category} className="flex items-center mb-2">
        <input
          type="radio"
          name="cacyroy-category"
          checked={selectedCategory === category}
          onChange={() => toggleCategory(category)}
          className="mr-2"
        />
        {category}
      </label>
    ))}
  </div>
</div>

    </aside>
  );
}
