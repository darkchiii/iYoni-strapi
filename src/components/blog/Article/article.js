import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Moment from "react-moment";
import Markdown from "react-markdown";
import Navbar from "../../Navbar" ;
import CategoryNav from '../CategoryNav' ;
import './article.css'

const Home = () => {
    const [article, setArticle] = React.useState({})
    const articleSlug=useParams()?.slug
    // const imageUrl=process.env.REACT_APP_BACKEND_URL + article.image.url 

    // console.log(useLocation())
    // console.log(useParams())
    React.useEffect(async() => {
        const data= await fetch("https://strapi-iyoni.herokuapp.com/articles?slug=" +articleSlug ).then (res=> res.json())
        console.log(data )
        setArticle(data[0])
    }, [])

    const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article?.image?.url;
      console.log(article.writer, "writer")
      return (
    <div>
      <Navbar/>
      <CategoryNav/>

  <div className="">

<div id="banner"
className="uk-flex uk-align-center uk-flex-center uk-flex-middle  uk-background-cover img-layout"
>
    <img className="banner"
    src={imageUrl}
    alt={article?.image?.url}
    />

 <h2 className="article-title">{article.title}</h2>
 </div>
</div>


<div className="uk-section section">
<div className="uk-container uk-container-small">
<hr className="solid" />

<div className="uk-grid-small uk-flex-left author-section" data-uk-grid="true">
<div>
{article?.author?.picture?.url && (
<img className='author-picture'
src={process.env.REACT_APP_BACKEND_URL + article?.author?.picture?.url}
imgStyle={{ position: "static", borderRadius: "50%", width: "30px"}}
/>
)}
</div>
<div className="uk-width-expand author-name">
<p className="uk-margin-remove-bottom">
{article?.author?.name}
</p>
<p className="uk-text-meta uk-margin-remove-top">

<Moment format="MMM Do YYYY">{article.published_at}</Moment>
</p>
</div>
</div>
<p className="content">
<Markdown source={article.content} escapeHtml={false} 
/>
</p>
</div>
</div>
   </div>
  );
};

export default Home;

