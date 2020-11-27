import React from 'react';
import Books from './Books';
import { Pagination } from './Pagination';

export default function Gallery({
  loading,
  currentBooks,
  booksPerPage,
  books,
  paginate,
}) {
  if (loading) {
    return <div>loading ... </div>;
  }

  return (
    <>
      <div className="books">
        {currentBooks.map((currentBook) => {
          return (
            <Books
              key={currentBook.id}
              title={currentBook.Title_DistinctivetitlebookCovertitle_TitleText}
              author={currentBook.Contributor1_PersonName}
              location={currentBook.Location}
              cover={currentBook.Cover_File}
              loading={loading}
            ></Books>
          );
        })}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </>
  );
}
