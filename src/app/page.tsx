"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/globals.css';
import PostsScroll from "../components/PostsScroll";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>All Posts</h1>
      </header>
      <PostsScroll/>
    </div>
  );
}
