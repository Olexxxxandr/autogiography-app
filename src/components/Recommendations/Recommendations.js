import React from 'react'
import "./Recommendations.css"
import people1 from './img/people1.svg'
import people2 from './img/people2.svg'
import people3 from './img/people3.svg'
import people4 from './img/people4.svg'
import people5 from './img/people5.svg'
import People from "./People/People";

const peopleList = [
    {
        id: 0,
        img: people1,
        name: "Володимир Се",
        prof: "Історик"
    },
    {
        id: 1,
        img: people2,
        name: "Володимир Се",
        prof: "Історик"
    },
    {
        id: 2,
        img: people3,
        name: "Володимир Се",
        prof: "Історик"
    },
    {
        id: 3,
        img: people4,
        name: "Володимир Се",
        prof: "Історик"
    },
    {
        id: 4,
        img: people5,
        name: "Володимир Се",
        prof: "Історик"
    },

]

const Recommendations = () => {
    return(
        <div className="recommendations">
            <div className="rec-title">
                <h1 className="rec-text">Рекомендовані люди:</h1>
                <a href="#">
                    <h1 className="rec-more">Переглянути всі</h1>
                </a>
            </div>
            <div className="people-list">
                {
                    peopleList.map(people => {
                        return <People people={people}/>
                    })
                }
            </div>
        </div>
    )
}

export default Recommendations