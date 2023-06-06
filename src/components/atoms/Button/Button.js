import './Button.scss';
import { Icon } from './../';
import cn from 'classnames';

const ButtonLink = (props) => {
  const { text, black, grey, customClass, handleClick, isDisabled } = props;
  const align = props.align || '';
  const arrow = props.arrowRight ? 'arrow_right' : '';
  const isBlack = black ? 'black_btn' : '';
  const isGrey = grey ? 'grey_btn' : '';
  return (
    <div
      className={`button button_link ${align} ${arrow} ${isBlack} ${isGrey} ${customClass}`}
      onClick={isDisabled ? undefined : handleClick}
    >
      {text}
    </div>
  );
};

export default ButtonLink;
