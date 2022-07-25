import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import LeftArrow from '../assets/svg/LeftArrow';
import RightArrow from '../assets/svg/RightArrow';
import Films from './Films';

const PaginatedItems = ({ itemsPerPage }) => {
  const [isLoading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    async function getData() {
      await axios.get('https://yts.mx/api/v2/list_movies.json').then((res) => {
        setFilms(res.data.data.movies);
        setLoading(false);
      });
    }
    if (isLoading) {
      getData();
    }
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(films.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(films.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, films, isLoading]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % films.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Films currentFilms={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel={<RightArrow />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<LeftArrow />}
        renderOnZeroPageCount={null}
        className={'flex mt-2 justify-center'}
        pageLinkClassName={'px-2'}
        pageClassName={'rounded-full hover:bg-[#e6e6e6]'}
        activeLinkClassName={'text-white'}
        activeClassName={'!bg-[#222]'}
        nextClassName={'ml-2 flex items-center'}
        previousClassName={'mr-2 flex items-center'}
      />
    </>
  );
};
export default PaginatedItems;
