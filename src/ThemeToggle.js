
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './Actions';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(state => state.isDarkTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{
      backgroundColor: isDarkTheme ? '#333' : '#FFF',
      color: isDarkTheme ? '#FFF' : '#333',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</h1>
      <button onClick={handleToggle}>
        Переключить тему
      </button>
    </div>
  );
};

export default ThemeToggle;
