import { Post } from "../types/Post";

export const handleFavourite = (post: Post, favourites: Post [], setFavourites:(post: Post[]) => void) => {
  if (!favourites.find(fav => fav.id === post.id)) {
    addToFavourites(post, favourites, setFavourites)
  }
  else {
    removeFavourite(post, favourites, setFavourites)
  }
}

export const addToFavourites = (post: Post, favourites: Post [], setFavourites:(post: Post[]) => void) => {
  post.isFavourite = true;
  const updatedFavourites = [...favourites, post];
  setFavourites(updatedFavourites);
  localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
};

export const removeFavourite = (post: Post, favourites: Post [], setFavourites:(post: Post[]) => void) => {
  post.isFavourite = false;
  const updatedFavourites = favourites.filter(favouritePost => post.id !== favouritePost.id);
  setFavourites(updatedFavourites);
  localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
};