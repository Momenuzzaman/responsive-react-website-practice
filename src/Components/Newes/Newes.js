import React from 'react';
import './Newes.css';

const Newes = ({ news }) => {

    const { author, title, description, urlToImage } = news;
    return (
        <div className="news-container">
            <h3>Name : {author}</h3>
            <h5>Title : {title}</h5>
            <img className="img" src={urlToImage} alt='' />
            <p>Description : {description}</p>
        </div>
    );
};

export default Newes;