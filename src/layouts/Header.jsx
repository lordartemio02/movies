import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='ml-8 pt-4 mb-4 md:mb-0'>
      <div className='w-16 bg-blue-600 px-4 rounded-xl'>
        <Link to='/'>Films</Link>
      </div>
    </header>
  );
};

export default Header;
