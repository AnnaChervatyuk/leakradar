import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import imageLicenseCC from '../../../images/license_cc.png';
import imageLicenseBY from '../../../images/license_by.png';
import imageLicenseNC from '../../../images/license_nc.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <div className="footer__elements">
          <Link to="/contacnts" className="link-black footer__element footer__element-contact">
            Контакты
          </Link>
          <Link to="/privacy_policy" className="link-black footer__element footer__element-privacy-policy">
            Политика конфиденциальности
          </Link>
          <div className="footer__element footer__element-license">
            <div className="license-icons">
              <img src={imageLicenseCC} width="23" height="23" />
              <img src={imageLicenseBY} width="23" height="23" />
              <img src={imageLicenseNC} width="23" height="23" />
            </div>
            <div className="license-about">Лицензия CC BY-NC</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
