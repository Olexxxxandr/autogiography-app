import React from "react";
import "./News.css"
import newsPic from './img/news.svg'

const newsList = [
    {
        id: 0,
        category: "Кулінарія",
        data: "02,02,22",
        text: "В інтерв’ю The Ukrainians Євген Клопотенко розповідає, як узявся ремонтувати кухню у великому ",
        img: newsPic
    },
    {
        id: 1,
        category: "Кулінарія",
        data: "02,02,22",
        text: "В інтерв’ю The Ukrainians Євген Клопотенко розповідає, як узявся ремонтувати кухню у великому ",
        img: newsPic
    },
    {
        id: 2,
        category: "Кулінарія",
        data: "02,02,22",
        text: "В інтерв’ю The Ukrainians Євген Клопотенко розповідає, як узявся ремонтувати кухню у великому ",
        img: newsPic
    },
]

const News = () => {
    return(
        <div className="news">
            <h1>Новини</h1>
            <div className="news-block">
                {
                    newsList.map(news => {
                        return(
                            <div key={news.id} className="newsPost">
                                <div className="news-info">
                                    <p className="news-cat">{news.category} - {news.data}</p>
                                    <p className="news-text">{news.text}</p>
                                </div>
                                <img width={300} height={200} src={news.img} alt={news.text}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News