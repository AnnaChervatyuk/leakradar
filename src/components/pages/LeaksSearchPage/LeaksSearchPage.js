// import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import { TopPanel, Footer } from '../../organisms';
// import ListVPN from './../../organisms/ListVPN/ListVPN';
import { observer } from 'mobx-react';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Button } from '../../atoms';

// import { ButtonLink } from '../../atoms';
// import { VPNsStore } from '../../../stores/';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import './LeaksSearchPage.scss';

const LeaksSearchPage = observer(() => {
  return (
    <div className="block block__wrapper LeaksSearchPage-page">
      <TopPanel />

      <div className="block__inner login-page__inner">LeaksSearchPage</div>
      <Footer />
    </div>
  );
});

export default LeaksSearchPage;
