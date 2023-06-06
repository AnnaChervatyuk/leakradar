import './Button.scss';
import { Link } from 'react-router-dom';
import { Icon } from './../';
import cn from 'classnames';

const ButtonLink = (props) => {
  const { text, url, iconId, customClass, externalURL } = props;
  const align = props.align || '';
  const arrow = props.arrowRight ? 'arrow_right' : '';
  return (
    <div className={`button button_link ${align} ${arrow}  ${customClass}`}>
      {externalURL ? (
        <a href={url} target="_blank" rel="noreferrer">
          {text}
          {/* <Icon id="exportsquare" /> */}
          {/* {icon && <Icon id="exportsquare" />} */}
        </a>
      ) : (
        <Link to={url}>
          {text}
          {/* <Icon id="exportsquare" /> */}
          {/* {icon && <Icon id="exportsquare" />} */}
        </Link>
      )}
    </div>
  );
};

export default ButtonLink;
