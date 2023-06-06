// import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import { TopPanel, Footer, CheckLeak, CompaniesSlider, ListPosts } from '../../organisms';
// import ListVPN from './../../organisms/ListVPN/ListVPN';
import { observer } from 'mobx-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../atoms';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

import './CampaignsPage.scss';

const CampaignsPage = observer(() => {
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
    },
    {
      name: 'Произошла утечка данных пользователей',
      type: 'Кампании',
      link: '/campaigns/campaign_post_4',
      img: 'campaigns_image/campaign_post_4.png'
    },
    {
      name: 'Mailchimp снова взломали: хакеры получили доступ к внутренним инструментам поддержки клиентов',
      type: 'Кампании',
      link: '/campaigns/campaign_post_5',
      img: 'campaigns_image/campaign_post_5.png'
    },
    {
      name: 'Произошла утечка данных пользователей образовательного сервиса «1С:Урок»',
      type: 'Кампании',
      link: '/campaigns/campaign_post_6',
      img: 'campaigns_image/campaign_post_6.png'
    }
  ];
  return (
    <div className="block block__wrapper campaigns_page">
      <TopPanel />
      <div className="campaigns_page__inner">
        <h1>Кампании</h1>
        <div className="campaigns_page__descr">
          Цель наших кампаний — привлечение внимания граждан, СМИ и государственных институтов к проблемам, которые
          существуют в Рунете и оказывают влияние на большое количество людей или на общество в целом. Считаем, что с
          помощью общественного резонанса мы можем влиять на решения, принимаемые чиновниками, и добиваться отмены или
          смягчения законов, ущемляющих права пользователей.
        </div>
        <div className="list_post__wrapper">
          <ListPosts list={listPosts} />
          <Button text="Показать еще" grey={true} customClass={`list_post__btn-show-more`} />
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default CampaignsPage;
