import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../atoms';
import PostItem from './PostItem.js';
import './ListPosts.scss';

const ListPosts = ({ list }) => {
  return (
    <div className="list_post__inner">
      <div className="list_post__list">
        {list.map((post_item, key) => (
          <PostItem post={post_item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ListPosts;
