const Block = ({ children, className }) => {
  return (
    <div className={`p-4 md:p-8  bg-gray-200 rounded-xl ` + className}>
      {children}
    </div>
  );
};

export default Block;
