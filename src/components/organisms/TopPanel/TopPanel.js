import { observer } from 'mobx-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { ButtonLink } from '../../atoms';
// import { VPNsStore } from '../../../stores/';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

import { Link } from 'react-router-dom';
import './TopPanel.scss';

const TopPanel = observer(() => {
  const location = useLocation().pathname.replace('/', '');
  const listMenu = [
    { name: 'Поиск утечек', link: '/leaks_search' },
    { name: 'Удаление данных', link: '/deleting_data' },
    { name: 'Кампании', link: '/campaigns' }
  ];
  const isLocationPersonal = location === 'login' || location === 'registration';
  return (
    <div className="top-panel block__inner">
      <div className="top-panel__logo">
        <Link to="/" className="top-panel__logo-link" />
      </div>
      <div className="top-panel__menu">
        {listMenu.map((item, key) => {
          return (
            <div
              key={item.name}
              className={`top-panel__menu__item ${useLocation().pathname.includes(item.link) ? 'active' : ''}`}
            >
              <Link to={item.link}>{item.name}</Link>
            </div>
          );
        })}
      </div>
      <div className="top-panel__login">
        <ButtonLink url="/login" customClass={`top-panel__login__mob ${isLocationPersonal ? 'active' : ''}`} />
        <ButtonLink
          text="Вход"
          url="/login"
          customClass={`top-panel__login__desc ${isLocationPersonal ? 'active' : ''}`}
        />
      </div>
    </div>
  );
});

export default TopPanel;
