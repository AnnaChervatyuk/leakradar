// import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import { TopPanel, Footer } from '../../organisms';
// import ListVPN from './../../organisms/ListVPN/ListVPN';
import { observer } from 'mobx-react';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Button } from '../../atoms';
import CompaniesList from './organisms/CompaniesList';
// import { ButtonLink } from '../../atoms';
// import { VPNsStore } from '../../../stores/';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import './DeleteDatePage.scss';

const DeleteDatePage = observer(() => {
  return (
    <div className="block block__wrapper deleting-date_page">
      <TopPanel />

      <div className="deleting-date_page__inner">
        <h1>Удаление своих данных</h1>
        <div className="deleting-date_page__inner__disclaimer">
          Быстрые ссылки для удаления своих данных из сервисов
        </div>
        <div className="deleting-date_page__inner__search">поиск</div>
        <div className="deleting-date_page__inner__sort">сортировка</div>
        <CompaniesList />
        <Button text="Показать еще" grey={true} customClass={`deleting-date_page__btn-show-more`} />
      </div>

      <Footer />
    </div>
  );
});

export default DeleteDatePage;
