import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../atoms';
import './CompaniesList.scss';

const CompaniesItem = ({ item }) => {
  const { name, img, id } = item;
  return (
    <div className="leak-companies__item">
      <img src={require(`${img}`)} alt="logo" className="leak-companies__img" />
      <div className="leak-companies__name">{name}</div>
    </div>
  );
};

export default CompaniesItem;
