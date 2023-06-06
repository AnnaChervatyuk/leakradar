import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../atoms';

import './CompaniesSlider.scss';

const CompaniesSlider = () => {
  const companiesListImg = [
    './images/beeline.png',
    './images/gosuslugi.png',
    './images/mesh.png',
    './images/rostelekom.png',
    './images/sber.png',
    './images/tele2.png',
    './images/beeline.png',
    './images/gosuslugi.png',
    './images/mesh.png',
    './images/rostelekom.png',
    './images/sber.png',
    './images/tele2.png'
  ];

  const shuffle = () => {
    return companiesListImg.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="companies_slider__wrapper">
      <Link className="companies_slider__inner" to="/delete_date">
        {shuffle().map((img, key) => (
          <img src={require(`${img}`)} alt="logo" className="companies_slider__logo" key={key} />
        ))}
      </Link>
    </div>
  );
};

export default CompaniesSlider;
