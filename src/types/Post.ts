export interface Post {
  id: string
  title: string
  content: string
  image: {
    url: string,
    altText: string
  },
  author: Author
  isFavourite?: boolean
}

export interface Author {
  name: string
  image: {
    url: string,
  }
}