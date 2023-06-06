import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/LoginPage/RegistrationPage';
import CampaignsPage from './pages/CampaignsPage/CampaignsPage';
import PostPage from './pages/PostPage/PostPage';
import DeleteDatePage from './pages/DeleteDatePage/DeleteDatePage';
import LeaksSearchPage from './pages/LeaksSearchPage/LeaksSearchPage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import AlternativeVPNPage from './pages/AlternativeVPNPage/AlternativeVPNPage';
// import PostsPage from './pages/PostsPage/PostsPage';
// import PostsListPage from './pages/PostsPage/PostsListPage';
// import RatingPage from './pages/RatingPage/RatingPage';
// import VPNPage from './pages/VPNPage/VPNPage';
// import Sitemap from './Sitemap';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
// import { BannersStore, PostsStore, VPNsStore } from '../stores/';

const App = () => {
  return (
    <div className="wrapper" id="wrapper">
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaigns/:postName" element={<PostPage />} />
          <Route path="/deleting_data" element={<DeleteDatePage />} />
          <Route path="/leaks_search" element={<LeaksSearchPage />} />

          {/* <Route path="*" element={<ErrorPage />} /> */}
          {/* <Route path="/index.html" element={<MainPage />} sitemapIndex="true" priority="1" />
         
          <Route path="/alternatives" element={<AlternativeVPNPage />} sitemapIndex="true" priority="1" />
          <Route path="/rating" element={<RatingPage />} sitemapIndex="true" priority="1" />
          <Route path="/rating/:vpn" element={<VPNPage />} sitemapIndex="true" priority="1" />
          <Route path="/news" element={<PostsListPage />} sitemapIndex="true" priority="1" />
          <Route path="/top" element={<PostsListPage />} sitemapIndex="true" priority="1" />
          <Route path="/reviews" element={<PostsListPage />} sitemapIndex="true" priority="1" />

          <Route path="/news/:newsName" element={<PostsPage />} sitemapIndex="true" priority="1" />
          <Route path="/top/:newsName" element={<PostsPage />} sitemapIndex="true" priority="1" />
          <Route path="/reviews/:newsName" element={<PostsPage />} sitemapIndex="true" priority="1" />

          <Route path="/search" element={<PostsListPage />} sitemapIndex="true" />
          <Route path="/sitemap" element={<Sitemap />} /> */}
        </Routes>
      </>
    </div>
  );
};

export default App;
