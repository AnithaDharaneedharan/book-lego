import React from 'react';

export default function Books({ title, author, location, cover }) {
  const hostUrl = 'https://www.perlego.com/';

  return (
    <div className="product" data-testid="product">
      <img
        src={`${hostUrl}${location}${cover}`}
        alt={`${hostUrl}${location}${cover}`}
      />
      <div data-testid="title" className="title">
        {title}
      </div>
      <div data-testid="author" className="author">
        {author}
      </div>
    </div>
  );
}
