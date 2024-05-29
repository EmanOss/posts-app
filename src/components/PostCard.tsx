import Link from 'next/link';
import { Post } from '../types/Post'
import LikeButton from './LikeButton';

interface PostCardProps {
  post: Post;
  handleFavourite: (post: Post) => void;
}

const PostCard = ({ post, handleFavourite }: PostCardProps) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="d-flex gap-3 align-items-center p-2">
        <img src={post.author.image.url} className="avatar" alt={post.author.name} />
        <Link className='author' href={'/'}>{post.author.name}</Link>
      </div>
      <img src={post.image.url} className="post-img" alt={post.image.altText} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <div className='btn-wrapper d-flex justify-content-end'>
          <LikeButton post={post} handleFavourite={handleFavourite} />
        </div>
      </div>
    </div>
  )
}
export default PostCard