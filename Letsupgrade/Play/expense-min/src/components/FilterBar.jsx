import React from 'react'

export default function FilterBar({
  filterCategory,
  setFilterCategory,
  searchText,
  setSearchText,
  sortBy,
  setSortBy
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search expenses..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />

      <select
        className="filter-select"
        value={filterCategory}
        onChange={e => setFilterCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Other">Other</option>
      </select>

      <select
        className="sort-select"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
      >
        <option value="date">Sort by Date</option>
        <option value="amount">Sort by Amount</option>
      </select>
    </div>
  );
}
