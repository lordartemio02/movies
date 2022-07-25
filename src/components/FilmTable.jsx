import { useNavigate } from 'react-router';

const FilmTable = ({ film }) => {
  const nav = useNavigate();
  const onClick = () => {
    nav('/' + film.id, { state: film });
  };
  return (
    <div
      className='flex mt-5 hover:bg-[#f7f7f7] p-4 rounded-2xl'
      onClick={onClick}>
      <div className='mr-5 min-h-[64px]  min-w-[48px] h-16 w-12'>
        <img src={film.small_cover_image} alt='cover_image' />
      </div>
      <div className='flex flex-col'>
        <span>{film.title_long && film.title_long}</span>
        <span>
          {film.genres &&
            film.genres.map((item, i) => {
              if (i + 1 === film.genres.length) {
                return item;
              } else {
                return item + ', ';
              }
            })}
        </span>
        <span>{film.rating && film.rating}</span>
      </div>
    </div>
  );
};
export default FilmTable;
