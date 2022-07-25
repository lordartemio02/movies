const TextAndValue = ({ label, text }) => {
  return (
    <div className='mb-2 flex'>
      <span className='mr-3 font-bold w-40'>{label}</span>
      <span>{text}</span>
    </div>
  );
};

export default TextAndValue;
