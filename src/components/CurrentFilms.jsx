import PaginatedItems from './PaginatedItems';

const CurrentFilms = () => {
  return (
    <div>
      <PaginatedItems itemsPerPage={5}></PaginatedItems>
    </div>
  );
};

export default CurrentFilms;
