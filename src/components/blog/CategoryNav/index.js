import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import "./CategoryNav.css"

import CATEGORIES_QUERY from "../queries/category/categories";

const CategoryNav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="uk-navbar-container nav" data-uk-navbar>
  

                {/* <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav categories">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.slug}>
                          <Link
                            to={`/category/${category.slug}`}
                            className="uk-link-reset"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div> */}

                <div className="uk-navbar-left cat-navbar">
              <button
                className="uk-button uk-margin-right button"
                type="button"
              >
                Kategorie
              </button>
              <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                {categories.map((category, i) => {
                      return (
                        <li key={category.slug}>
                          <Link
                            to={`/category/${category.slug}`}
                            className="uk-link-reset"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default CategoryNav;