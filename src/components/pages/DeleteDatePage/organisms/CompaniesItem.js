import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../atoms';
import './CompaniesList.scss';
import CompanyPopup from './CompanyPopup';

const CompaniesItem = ({ item }) => {
  const { name, img, id } = item;
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const changeVisiblePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  return (
    <>
      <div className="leak-companies__item" onClick={changeVisiblePopup}>
        <img src={require(`${img}`)} alt="logo" className="leak-companies__img" />
        <div className="leak-companies__name">{name}</div>
      </div>
      <CompanyPopup isOpen={isOpenPopup} closePopup={changeVisiblePopup} item={item} />
    </>
  );
};

export default CompaniesItem;
