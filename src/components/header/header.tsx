import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Header ():JSX.Element {
  return (
    <header className="header-content padding-container">
      <Link aria-current="page" to={AppRoute.Main}>
        <img src="images/alfa-digital.svg" width="279" height="62" alt="Логотип Альфа-Digital."/>
      </Link>
    </header>
  );
}

export default Header;
