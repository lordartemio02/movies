import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Download from '../assets/svg/Download';
import Block from '../layouts/Block';
import MainLayout from '../layouts/MainLayout';
import TextAndValue from './TextAndValue';

const Film = () => {
  const { state } = useLocation();
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [comments, setComments] = useState();

  const onChange = (e) => {
    if (error) {
      setError('');
    }
    setValue(e.target.value);
  };
  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem(state?.id)));
  }, [state?.id]);
  const onCLick = () => {
    if (value) {
      if (!localStorage.getItem(state.id)) {
        const mass = [];
        mass.push(value);
        localStorage.setItem(state.id, JSON.stringify(mass));
        setComments(mass);
      } else {
        const mass = JSON.parse(localStorage.getItem(state.id));
        mass.push(value);
        localStorage.setItem(state.id, JSON.stringify(mass));
        setComments(mass);
      }
      setValue('');
      setError('');
    } else {
      setError('Введите комментарий');
    }
  };
  const onDelete = (text) => {
    const newComment = comments.filter((el) => el !== text);
    setComments(newComment);
    localStorage.setItem(state.id, JSON.stringify(newComment));
  };

  return (
    <MainLayout bg={state.background_image}>
      <div className={`md:m-9`}>
        <Block className='flex flex-col items-center  md:flex-row'>
          <img
            className='h-[320px] w-[320px] md:mr-6 mb-4 md:mb-0 '
            src={state.large_cover_image}
            alt=''
          />
          <div className='w-full'>
            <div className='md:w-2/3 flex flex-col'>
              <span className='mb-2'>{state.title_long}</span>
              <span className='mb-2'>{state.title_english}</span>
              <span className='mb-2'>{state.description_full}</span>
              <TextAndValue label={'Год производства: '} text={state.year} />
              <TextAndValue
                label={'Жанр:'}
                text={
                  state.genres &&
                  state.genres.map((item, i) => {
                    if (i + 1 === state.genres.length) {
                      return item;
                    } else {
                      return item + ', ';
                    }
                  })
                }
              />
              <TextAndValue label={'Рейтинг: '} text={state.rating} />
            </div>
          </div>
        </Block>
        <Block className='mt-6'>
          <p>Также вы можете скачать это тут:</p>
          <div>
            {state.torrents.map((item, index) => (
              <div key={item.hash + index} className='m-4'>
                <a href={item.url} className='flex flex-row items-center'>
                  <div className='mr-4'>
                    <Download />
                  </div>
                  <div className='flex flex-col'>
                    <span>Размер: {item.size}</span>
                    <span>Качество: {item.quality}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Block>
        <Block className='mt-6'>
          <p className='mt-4 mb-4'>Комментарии</p>

          {comments ? (
            comments.map((item, index) => (
              <div
                className='flex justify-between items-center mb-4 bg-blue-200 rounded-xl p-4'
                key={item + index + Math.random(100000)}>
                <span>{item}</span>
                <button
                  className='w-32 bg-blue-600 rounded-xl p-2 text-white'
                  onClick={() => onDelete(item)}>
                  Удалить
                </button>
              </div>
            ))
          ) : (
            <div className='mb-4'>Комментариев нет:(</div>
          )}
          <p className='mb-4'>Оставить свой комментарий</p>

          <div className='flex flex-col items-center'>
            <textarea
              className='w-full p-2'
              type='text'
              onChange={onChange}
              value={value}
            />
            {error && <span className='mt-2 text-[red]'>{error}</span>}
            <button
              className='w-32 bg-blue-600 rounded-xl mt-4 p-2 text-white'
              onClick={onCLick}>
              Отправить
            </button>
          </div>
        </Block>
      </div>
    </MainLayout>
  );
};

export default Film;
