import { TopPanel, Footer, CheckLeak, CompaniesSlider, ListPosts, Slider } from '../../organisms';
import PostItem2 from '../../organisms/ListPosts/PostItem2';
import { Button } from '../../atoms';

import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

// import { ButtonLink } from '../../atoms';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

import './MainPage.scss';

const MainPage = observer(() => {
  const listPosts = [
    {
      name: 'Около 35 000 пользователей PayPal пострадали от атак с подстановкой учетных данных',
      type: 'Кампании',
      link: '/campaigns/campaign_post_1',
      img: 'campaigns_image/campaign_post_1.png'
    },
    {
      name: '«Роскомсвобода» и «Сетевые свободы» подают коллективный иск к «Яндекс.Еде»к «Яндекс.Еде»к «Яндекс.Еде»',
      type: 'Кампании',
      link: '/campaigns/campaign_post_2',
      img: 'campaigns_image/campaign_post_2.png'
    },
    {
      name: 'Mailchimp снова взломали: хакеры получили доступ к внутренним инструментам поддержки клиентов',
      type: 'Кампании',
      link: '/campaigns/campaign_post_3',
      img: 'campaigns_image/campaign_post_3.png'
    }
  ];
  const postData = {
    name: 'Mailchimp снова взломали: хакеры получили доступ',
    type: 'Новости',
    link: '/campaigns/campaign_post_3',
    img: 'campaigns_image/campaign_post_3.png'
  };

  return (
    <div className="block block__wrapper main_page">
      <TopPanel />
      <CheckLeak />
      <CompaniesSlider />
      <div className="main_page__inner">
        <div className="main_page__inner-field">
          <ListPosts list={listPosts} />
        </div>

        <div className="main_page__inner-slider">
          <Slider list={listPosts} title="Крупные утечки" />
        </div>

        <div className="main_page__inner-field">
          <ListPosts list={listPosts} />
        </div>
        <div className="main_page__inner-slider">
          <Slider list={listPosts} title="Кампании против утечек" />
        </div>
        <div className="main_page__inner-field">
          <PostItem2 post={postData} />
          <Button text="Показать еще" grey={true} customClass={`list_post__btn-show-more`} />
        </div>
      </div>

      <Footer />
    </div>
  );
});

export default MainPage;
