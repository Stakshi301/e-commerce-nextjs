'use client';

export default function FilteringProducts({
  categories,
  selectedCategory,
  toggleCategory,
  range,
  setRange,
}) {
  return (
    <aside className="bg-blue-100 p-6 rounded-md shadow-md w-full sm:w-64 mb-6 sm:mb-0">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-6">
        <h4 className="font-medium mb-2">Category</h4>
        {categories.map((category) => (
          <label key={category} className="block mb-2 capitalize">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() => toggleCategory(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>

      <div>
        <label htmlFor="price" className="block mb-1 font-medium">
          Price: ₹{range}
        </label>
        <input
          id="price"
          type="range"
          min="0"
          max="1000"
          step="10"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="w-full"
        />
      </div>
    </aside>
  );
}
