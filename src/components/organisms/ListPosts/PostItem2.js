import { Link } from 'react-router-dom';
import './ListPosts.scss';

const PostItem2 = ({ post }) => {
  const { name, type, link, img } = post;
  return (
    <div className="post_item-second">
      <Link to={link} className="post_item__link">
        <div className="post_item-second__descr">
          <div className="type">{type}</div>
          <h3>{name}</h3>
        </div>
        <img src={require(`../../../images/${img}`)} alt="logo" className="" />
      </Link>
    </div>
  );
};

export default PostItem2;
