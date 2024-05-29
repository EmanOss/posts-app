import React from 'react'
import PostsScroll from '../../components/PostsScroll'
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LikedPage = () => {
  return (
    <div className={'container'}>
      <PostsScroll favouritesOnly={true}/>
    </div>
  )
}

export default LikedPage