import React from 'react'
import { Post } from '../types/Post'
import '../app/styles/globals.css'

interface FavouriteButtonProps {
  post: Post;
  handleFavourite: (post: Post) => void;
}

const LikeButton = ({ post, handleFavourite }: FavouriteButtonProps) => {
  return (
    <button
      onClick={() => handleFavourite(post)}
      className={`btn btn-light btn-like ${post.isFavourite ? 'favourite' : ''}`}>
      <i className={`bi ${post.isFavourite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
    </button>
  )
}

export default LikeButton