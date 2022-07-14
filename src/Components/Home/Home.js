import React, { useEffect, useState } from 'react';
import Newes from '../Newes/Newes';
import './Home.css';

const Home = () => {
    const [newes, setNews] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1e7b5a8d3ec84caf90324436f42ca660')
            .then(response => response.json())
            .then(data => setNews(data.articles));
    }, []);
    return (
        <div className="newes-container">
            {
                newes.map(news => <Newes news={news} ></Newes>)
            }
        </div>
    );
};

export default Home;