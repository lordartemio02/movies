import Header from './Header';

const MainLayout = ({ children, bg }) => {
  return (
    <div
      className='pl-6 pr-6 h-full bg-no-repeat bg-[length:100%_100%] min-h-screen'
      style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
