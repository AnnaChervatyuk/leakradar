import { Link } from 'react-router-dom';
import './Slider.scss';

const SliderItem = (props) => {
  const { name, link, img, type } = props.item;

  return (
    <div className="slider_item">
      <Link to={link} className="slider_item__link-el">
        <img src={require(`../../../images/${img}`)} />
        <div className="slider_item__content">
          <div className="slider_item__type type">{type}</div>
          <div className="slider_item__title">{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default SliderItem;
