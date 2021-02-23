import {  gql, useQuery } from '@apollo/client';

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      slug
      name
    }
  }
`;

export default CATEGORIES_QUERY;