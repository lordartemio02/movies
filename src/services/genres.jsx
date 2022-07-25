export const genres = ({ genres }) => {
  const genre =
    genres &&
    genres.map((item, i) => {
      if (i + 1 === genres.length) {
        return item;
      } else {
        return item + ', ';
      }
    });
  return genre;
};
