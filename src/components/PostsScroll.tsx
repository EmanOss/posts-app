"use client";
import React, { useEffect, useState } from 'react'
import { Post } from '../types/Post'
import PostCard from './PostCard'
import { handleFavourite } from '../utils/favourite';
import postsData from '../data/posts.json';

interface PostsScrollProps {
  favouritesOnly?: boolean;
}

const PostsScroll = ({  favouritesOnly = false }: PostsScrollProps) => {

  const [posts, setPosts] = useState(postsData);
  const [favourites, setFavourites] = useState<Post[]>([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]') as Post[];
    setFavouriteProperty(savedFavourites);
    setFavourites(savedFavourites);
  }, []);
  
  const setFavouriteProperty = (favourites: Post[]) => {
    setPosts(postsData.map(post => ({
      ...post,
      isFavourite: favourites.some(fav => fav.id === post.id)? true : false
    })));
  }

  return (
    <div className="container-fluid gap-3 posts-container">
      {posts.filter(p => !favouritesOnly || favourites.find(fav => fav.id === p.id))
      .map(post => (
        <PostCard key={post.id} post={post}
          handleFavourite={() => handleFavourite(post, favourites, setFavourites)} />
      ))}
    </div>
  )
}

export default PostsScroll