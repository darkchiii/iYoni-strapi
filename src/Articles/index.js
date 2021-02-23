import React from "react";
import Articles from "../components/blog/Articles";
import Query from '../components/blog/Query';
import ARTICLES_QUERY from "../components/blog/queries/article/articles";
import { useParams } from "react-router-dom";




const Home = () => {
  const [articles, setArticles] = React.useState([])
  const categorySlug = useParams()?.slug
  React.useEffect(async () => {
    const data = await fetch("http://localhost:1337/articles").then(res => res.json())

    setArticles(data)
  }, [])
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query> */}
          <Articles articles={articles.filter(article => categorySlug ? article.category.slug === categorySlug : true)} />

        </div>
      </div>
    </div>
  );
};

export default Home;