import React from 'react';

export default function Search({ totalBooks, search }) {
  return (
    <div className="filter">
      <span>Books you might like</span>
      <div data-testid="totalBooks">Found {totalBooks} books</div>
      <div>
        <input
          type="text"
          placeholder="Search"
          onKeyDown={(event) => search(event)}
        />
      </div>
    </div>
  );
}
