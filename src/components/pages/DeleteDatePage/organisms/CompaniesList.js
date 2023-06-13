import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../atoms';
import CompaniesItem from './CompaniesItem.js';
import './CompaniesList.scss';

const CompaniesList = () => {
  const companiesListImg = [
    { name: 'билайн', img: './images/beeline.png', id: 'beeline' },
    { name: 'госуслуги', img: './images/gosuslugi.png', id: 'gosuslugi' },
    { name: 'мэш', img: './images/mesh.png', id: 'mesh' },
    { name: 'ростелеком', img: './images/rostelekom.png', id: 'rostelekom' },
    { name: 'сбер', img: './images/sber.png', id: 'sber' },
    { name: 'tele2', img: './images/tele2.png', id: 'tele2' }
  ];

  return (
    <div className="leak-companies__list">
      {companiesListImg.map((item, key) => (
        <CompaniesItem item={item} key={key} />
      ))}
    </div>
  );
};

export default CompaniesList;
