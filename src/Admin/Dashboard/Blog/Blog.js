import React from 'react';
import './style/Orders.scss';
import AddArticle from "./AddArticle/AddArticle";
import ArticleList from "./ArticleList/ArticleList";
import MyArticles from "./MyArticles/MyArticles";
import ArticleCategories from "./ArticleCategories/ArticleCategories";

const Blog = ({handleClick}) => {

    return (
        <>
            <li>
                <a href="#" data-toggle="collapse"
                   data-target="#sidebar-blog-nav"
                   aria-expanded="false"
                   aria-controls="conferences-nav"
                   onClick={handleClick}
                   data-toggle-active="active"
                >
                    <i className="fa fa-edit"></i>
                    Blog
                </a>
                <ul className="collapse sidebar-conferences-ul" id="sidebar-blog-nav">
                    <AddArticle handleClick={handleClick}/>
                    <ArticleList handleClick={handleClick}/>
                    <MyArticles handleClick={handleClick}/>
                    <ArticleCategories handleClick={handleClick}/>
                </ul>
            </li>
        </>
    );
}

export default Blog;
