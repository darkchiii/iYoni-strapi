import {gql} from "@apollo/client"

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      slug
      title
      category {
        slug
        name
      }
      image {
        url
      }
      author {
        name
      }
    }
  }
`;

export default ARTICLES_QUERY;