import {CSSProperties} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const notFoundIdStyle: CSSProperties = {
  position: 'relative',
  height: '100vh',
};

const notFoundClassStyle: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  WebkitTransform: 'translate(-50%, -50%)',
  msTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  maxWidth: '460px',
  width: '100%',
  textAlign: 'center',
  lineHeight: 1.4,
};

const aStyle: CSSProperties = {
  fontFamily: '\'PT Sans\', sans-serif',
  display: 'inline-block',
  padding: '10px 25px',
  backgroundColor: 'rgba(238, 42, 35, 1)',
  border: 'none',
  borderRadius: '40px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
  textDecoration: 'none',
  WebkitTransition: '0.2s all',
  transition: '0.2s all',
};

function NotFound ():JSX.Element {
  return (
    <div style={notFoundIdStyle} id="notfound">
      <div style={notFoundClassStyle} className="notfound">
        <div className="notfound-404">
          <div/>
          <h1>404</h1>
        </div>
        <h2>Страница не найдена</h2>
        <p>Перейдите пожалуйста на главную страницу</p>
        <Link style={aStyle} to={AppRoute.Main}>Главная страница</Link>
      </div>
    </div>
  );
}

export default NotFound;
