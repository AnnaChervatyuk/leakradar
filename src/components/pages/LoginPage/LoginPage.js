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
import './LoginPage.scss';

const LoginPage = observer(() => {
  const [isEmailSended, setIsEmailSended] = useState(false);
  const [email, setEmail] = useState();
  const [isEmailCorrect, setEmailCorrect] = useState(true);

  const handleKeypress = (e) => {
    if (e.which === 13) {
      onClickBtnNext();
    }
  };

  const onClickBtnNext = () => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      setIsEmailSended(true);
    } else {
      setEmailCorrect(false);
    }
  };

  return (
    <div className="block block__wrapper login-page">
      <TopPanel />

      <div className="block__inner login-page__inner">
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
            <h1>Вход</h1>
            <div className="login-page__form">
              <Input
                customClass="login-page__form__login-email"
                type="text"
                placeholder="Email"
                onChange={(el) => {
                  if (!isEmailCorrect) setEmailCorrect(true);
                  setEmail(el.target.value);
                }}
                onKeyPress={handleKeypress}
              />
              {!isEmailCorrect && <div className="login-page__form__email-error">Некорректный email</div>}
              <div className="login-page__form__text">Сюда пришлём ссылку для входа</div>
            </div>
            <Button
              text="Продолжить"
              black={true}
              customClass="login-page__form__btn-next"
              handleClick={onClickBtnNext}
            />
            <Link to="/registration" className="link-main login-page__form__reg">
              Регистрация
            </Link>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
});

export default LoginPage;
