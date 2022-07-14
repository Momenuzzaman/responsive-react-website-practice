import React from 'react';

const Newes = ({ news }) => {

    const { author, title, description, urlToImage } = news;
    return (
        <div>
            <h3>Name : {author}</h3>
            <h5>Title : {title}</h5>
            <img src={urlToImage} alt='' />
            <p>Description : {description}</p>
        </div>
    );
};

export default Newes;