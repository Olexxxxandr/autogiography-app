import React from 'react'
import './Footer.css'

import twitter from './img/Twitter.svg'
import facebook from './img/Facebook.svg'
import telegram from './img/Telegram.svg'
import instagram from './img/Instagram.svg'

import logo from './img/logo.svg'
import cIcon from './img/c-icon.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-flex">
                <div className="footer-line"></div>
                    <img width={50} src={twitter} alt="twitter"/>
                    <img width={50} src={telegram} alt="telegram"/>
                    <img width={50} src={instagram} alt="instagram"/>
                    <img width={50} src={facebook} alt="facebook"/>
                <div className="footer-line"></div>
            </div>
            <img width={300} className="footer-logo" src={logo} alt="logo"/>
            <div className="footer-nav">
                <a href="#" className="footer-nav-link">Політика сайту |</a>
                <a href="#" className="footer-nav-link"> Про нас |</a>
                <a href="#" className="footer-nav-link"> Реклама |</a>
                <a href="#" className="footer-nav-link"> Технічна підтримка</a>
            </div>
            <div className="footer-info">
                <img width={25} alt="c-icon" src={cIcon}/>
                <p className="footer-name">2021 Autobiography</p>
            </div>
        </div>
    )
}

export default Footer