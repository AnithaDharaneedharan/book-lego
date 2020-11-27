import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import Search from './Search';

import { api } from '../services/books';

export default function Main() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);
  const [errorMessage, setErrorMessage] = useState('');
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/books`);
      if (response && response.data) {
        setBooks(response.data.data);
      }
    } catch (error) {
      setErrorMessage('could not get books');
    } finally {
      setLoading(false);
    }
  };

  const search = async (event) => {
    if (event.keyCode === 13) {
      const input = event.target.value.toLowerCase();
      try {
        setLoading(true);
        const response = await api.get(`/books?searchQuery=${input}`);
        if (response && response.data) {
          setBooks(response.data.data);
        }
      } catch (error) {
        setErrorMessage('could not get books');
      } finally {
        setLoading(false);
      }
    }
  };

  return errorMessage ? (
    <div className="font-weight-bold text-uppercase text-danger">
      Books not found
    </div>
  ) : (
    <div>
      <Search totalBooks={books.length} search={search} />
      <Gallery
        loading={loading}
        currentBooks={currentBooks}
        books={books}
        paginate={paginate}
        booksPerPage={booksPerPage}
      />
    </div>
  );
}
