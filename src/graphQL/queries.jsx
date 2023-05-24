import { gql } from "@apollo/client";

const GET_POSTS = gql`
    query {
      posts {
        author {
          name
          picture {
            url
          }
          title
        }
        coverImage {
          url
        }
        date
        slug
        title
        excerpt
        id
      }
}
`

const GET_POST = gql`
  query getPost($slug: String!) {
  post(where: {slug: $slug}) {
    author {
      id
      name
      picture {
        url
      }
      posts {
        coverImage {
          url
        }
        excerpt
        id
        slug
        title
      }
      title
    }
    content {
      html
    }
    coverImage {
      url
    }
    slug
    title
  }
}

`

export { GET_POSTS, GET_POST };