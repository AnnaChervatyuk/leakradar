import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../atoms';

import './CheckLeak.scss';

const CheckLeak = () => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [isEmailCorrect, setEmailCorrect] = useState(true);

  const onClickBtnNext = () => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      setEmailCorrect(false);
    }
  };

  const btnCheckDisabled = !email || !phone || !isEmailCorrect;

  return (
    <div className="check-leak__wrapper">
      <div className="check-leak__inner">
        <div className="check-leak__inner-bg"></div>
        <h3>Проверьте, какие данные о вас утекали в сеть и что можно с этим сделать</h3>
        <div className="check-leak__form">
          <div className="check-leak__form__element">
            <Input
              customClass="check-leak__form__element-email"
              type="text"
              placeholder="Email"
              onChange={(el) => {
                if (!isEmailCorrect) setEmailCorrect(true);
                setEmail(el.target.value);
              }}
            />
          </div>
          <div className="check-leak__form__element">
            <Input
              customClass="check-leak__form__element-phone"
              type="text"
              placeholder="Номер телефона"
              onChange={(el) => {
                setPhone(el.target.value);
              }}
            />
          </div>
          <div className="check-leak__form__element">
            <Button
              text="Проверить"
              grey={true}
              customClass={`check-leak__form__btn-next ${btnCheckDisabled ? 'disabled' : ''}`}
              handleClick={onClickBtnNext}
              isDisabled={btnCheckDisabled}
            />
          </div>
        </div>
        <div className="check-leak__form__disclaimer">
          <div className="">Посмотреть чужие персональные данные здесь не получится</div>
          <div className="check-leak__form__policy">
            <Link to="/privacy_policy" className="link-main">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckLeak;
