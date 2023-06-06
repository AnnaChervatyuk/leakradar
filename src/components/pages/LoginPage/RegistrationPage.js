// import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import { TopPanel, Footer } from '../../organisms';
// import ListVPN from './../../organisms/ListVPN/ListVPN';
import { observer } from 'mobx-react';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Button, Checkbox } from '../../atoms';

// import { ButtonLink } from '../../atoms';
// import { VPNsStore } from '../../../stores/';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import './LoginPage.scss';

const RegistrationPage = observer(() => {
  const [isEmailSended, setIsEmailSended] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [telegram, setTelegram] = useState();
  const [isEmailCorrect, setEmailCorrect] = useState(true);
  const [isAgreeRules, setAgreeRules] = useState(false);
  const onClickBtnNext = () => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      setIsEmailSended(true);
    } else {
      setEmailCorrect(false);
    }
  };

  const btnNextDisabled = !email || !name || !isAgreeRules || !isEmailCorrect;

  return (
    <div className="block block__wrapper login-page">
      <TopPanel />
      {isEmailSended ? (
        <>
          <h1>Проверьте почту</h1>
          <div className="login-page__form">Ссылка на вход лежит на почте {email}</div>
          <a
            href={`http://${email.split('@').pop()}`}
            target="_blank"
            rel="noreferrer"
            className="link-main login-page__form__reg"
          >
            Открыть {email.split('@').pop()}
          </a>
        </>
      ) : (
        <>
          <div className="block__inner login-page__inner">
            <h1>Регистрация</h1>
            <div className="login-page__form">
              <div className="login-page__form__login ">
                <Input
                  customClass="login-page__form__login-name"
                  type="text"
                  placeholder="Фамилия Имя"
                  label="Фамилия Имя"
                  value={name}
                  onChange={(el) => {
                    setName(el.target.value);
                  }}
                />
              </div>
              <div className="login-page__form__login ">
                <Input
                  customClass="login-page__form__login-email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  label="Email"
                  onChange={(el) => {
                    if (!isEmailCorrect) setEmailCorrect(true);
                    setEmail(el.target.value);
                  }}
                />
                {!isEmailCorrect && <div className="login-page__form__email-error">Некорректный email</div>}
              </div>
              <div className="login-page__form__login ">
                <Input
                  customClass="login-page__form__login-telegram"
                  type="text"
                  placeholder="Имя пользователя в Telegram"
                  label="Имя пользователя в Telegram"
                  value={telegram}
                  onChange={(el) => {
                    setTelegram(el.target.value);
                  }}
                />
                <div className="login-page__form__text">Необязательно, но намного упростит процесс</div>
              </div>
            </div>
            <div className="login-page__rules">
              <Checkbox
                isChecked={isAgreeRules}
                onChange={() => {
                  setAgreeRules(!isAgreeRules);
                }}
                label={
                  <>
                    Соглашаюсь{' '}
                    <Link to="/rules" className="link-main">
                      с правилами
                    </Link>{' '}
                    сервиса
                  </>
                }
              />
            </div>
            <Button
              text="Продолжить"
              black={true}
              customClass={`login-page__form__btn-next ${btnNextDisabled ? 'disabled' : ''}`}
              handleClick={onClickBtnNext}
              isDisabled={btnNextDisabled}
            />
            <Link to="/login" className="link-main login-page__form__reg">
              Войти, у меня уже есть аккаунт
            </Link>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
});

export default RegistrationPage;
