import { Link } from 'react-router-dom';
import './ListPosts.scss';

const PostItem = ({ post }) => {
  const { name, type, link, img } = post;
  return (
    <div className="post_item">
      <Link to={link} className="post_item__link">
        <img src={require(`../../../images/${img}`)} alt="logo" className="post_item__image" />
        <div className="post_item__descr">
          <div className="post_item__type type">{type}</div>
          <div className="post_item__name">{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
