import React from "react";
import "./Interview.css"
import interviewPic from './img/interview.svg'

const interviewsList = [
    {
        id: 0,
        img: interviewPic,
        data: "4 квітня 2022 року",
        photograph: "Володимир Сергійович",
        about: "Христина Шабат",
        text: "Володимир Станчишин: «Кожне сьогодні мало своє вчора»«Кожне сьогодні мало своє вчора»«Кожне сьогодні мало своє вчора»...",
        author: "Петро Петрович"
    },
    {
        id: 1,
        img: interviewPic,
        data: "4 квітня 2022 року",
        photograph: "Володимир Сергійович",
        about: "Христина Шабат",
        text: "Володимир Станчишин: «Кожне сьогодні мало своє вчора»«Кожне сьогодні мало своє вчора»«Кожне сьогодні мало своє вчора»...",
        author: "Петро Петрович"
    },
]

const Interview = () => {
    return(
        <div className="interview-block">
            {
                interviewsList.map(i => {
                    return(
                        <div key={i.id} className="interview">
                            <img className="interview-pic" src={i.img} alt={i.text}/>
                            <div className="interview-info">
                                <p className="interview-set">Інтерв'ю - {i.data}</p>
                                <p className="interview-set">Фото: {i.photograph}</p>
                            </div>
                            <h1 className="interview-about">{i.about}</h1>
                            <h2 className="interview-text">{i.text}</h2>
                            <p className="interview-set set">Автор: {i.author}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Interview