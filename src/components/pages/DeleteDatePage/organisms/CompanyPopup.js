import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../atoms';
import './CompaniesList.scss';
import imageLogo from '../../../../images/logo_leakradar-desc.svg';

const CompanyPopup = ({ item, isOpen, closePopup }) => {
  const { name, img } = item;
  return (
    <div className={`popup deleting-date-info company-popup__wrapper ${isOpen ? '' : 'hidden'}`}>
      <div className="company-popup__inner">
        <div className="close_btn" onClick={closePopup}></div>
        <h2>Удаление своих данных из сервиса {name}</h2>
        <div className="deleting-date-info__instruction">
          <img src={require(`${img}`)} alt={name} className="deleting-date-info__instruction__img" />
          <div>
            Инструкция , что делать. Scroll down, select a reason, tick the checkbox, click on "Close My Account" and
            follow the link in the confirmation e-mail.
          </div>
        </div>
        <Button text="Перейти к удалению" black={true} customClass={`deleting-date-info__btn-delete`} />
        <div className="deleting-date-info__lawsuit">
          <div className="deleting-date-info__lawsuit__inner">
            <img src={imageLogo} alt="leakradar" className="deleting-date-info__lawsuit__img" />
            <div>
              Инструкция , что делать. Scroll down, select a reason, tick the checkbox, click on "Close My Account" and
              follow the link in the confirmation e-mail.
            </div>
            <div className="deleting-date-info__lawsuit__btn-group">
              <Button text="Присоединиться к иску" black={true} customClass={`deleting-date-info__lawsuit__btn-join`} />
              <Button
                text="Подробнее о кампании"
                customClass={`deleting-date-info__lawsuit__btn-more`}
                url="/campaigns"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPopup;
