import React, { useState, useMemo } from 'react';

// Simulate a large dataset (imagine this list has thousands of items)
const inventory = [
  { id: 1, name: 'Laptop', price: 1500, category: 'Electronics' },
  { id: 2, name: 'Chair', price: 200, category: 'Furniture' },
  { id: 3, name: 'Phone', price: 800, category: 'Electronics' },
  { id: 4, name: 'Table', price: 300, category: 'Furniture' },
  { id: 5, name: 'Headphones', price: 150, category: 'Electronics' },
  // ...imagine thousands of more items
];

function InventoryApp() {
  const [category, setCategory] = useState('');
  const [sortType, setSortType] = useState('name'); // 'name' or 'price'
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  // 1. Filter the items based on the selected category (memoized)
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return category
      ? inventory.filter((item) => item.category === category)
      : inventory;
  }, [category]);

  // 2. Sort the filtered items based on the selected sort type (memoized)
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...filteredItems].sort((a, b) => {
      if (sortType === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });
  }, [filteredItems, sortType]);

  // 3. Paginate the sorted items (memoized)
  const paginatedItems = useMemo(() => {
    console.log('Paginating items...');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedItems.slice(startIndex, endIndex);
  }, [sortedItems, page]);

  return (
    <div>
      <h1>Inventory</h1>

      {/* Category filter */}
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
      </select>

      {/* Sort by */}
      <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

      {/* Pagination */}
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>
      <button
        disabled={paginatedItems.length < itemsPerPage}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>

      {/* Display items */}
      <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryApp;
