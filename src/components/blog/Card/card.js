import React from "react";
import { Link } from "react-router-dom";
import '../../../App.css' ;
import './card.css' ;
// import { useLocation, useParams } from "react-router-dom";


const Card = ({article}) => {

  // const [article, setArticle] = React.useState({})
  // const articleSlug=useParams()?.slug
  // const imageUrl=process.env.REACT_APP_BACKEND_URL + article.image.url 

  // console.log(useLocation())
  // console.log(useParams())
  // React.useEffect(async() => {
  //     const data= await fetch("http://localhost:1337/articles?slug=" +articleSlug ).then (res=> res.json())
  //     console.log(data )
  //     setArticle(data[0])
  // }, [])

  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article?.image?.url
      : process.env.REACT_APP_BACKEND_URL + article?.image?.url;
      console.log(article?.image?.url, "imageUrl")
      console.log(imageUrl, "url")
  return (
    <Link to={`/article/${article.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted uk-card-hover card">
        <div className="uk-card-media-top">
          <img className="card-img"
            src={imageUrl}
            // src={article.image.url}
            alt={article?.image?.url}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="category">
            {article.category.name}
          </p>
          <p id="title" className="title">
            {article.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;