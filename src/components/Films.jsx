import FilmTable from './FilmTable';

const Films = ({ currentFilms }) => {
  return (
    <>
      {currentFilms &&
        currentFilms.map((item) => <FilmTable key={item.id} film={item} />)}
    </>
  );
};
export default Films;
