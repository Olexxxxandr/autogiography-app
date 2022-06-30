import React, {useState} from "react";
import "./Header.css"
import logo from './img/logo1.svg'
import notificationLogo from './img/notification.svg'
import popularLogo from './img/popular.svg'
import searchLogo from './img/search.svg'

const Header = () => {

    const [isSearch, setIsSearch] = useState(false);

    const onSearch = () => {
        setIsSearch(!isSearch)
    }

    return(
        <header>
            <div className="header">
                <a href="/"><img className="header-logo" width={200} height={80} src={logo} alt='logo'/></a>
                <div className="header-nav">
                    <img className="header-nav-logo" width={30} height={30} src={notificationLogo} alt="notificationLogo"/>
                    <img className="header-nav-logo" onClick={onSearch} width={30} height={30} src={searchLogo} alt="searchLogo"/>
                    <img className="header-nav-logo" width={30} height={30} src={popularLogo} alt="popularLogo"/>
                </div>
            </div>

            {
                isSearch && <div className="input-set">
                    <input type='text'/>
                    <img width={20} height={20} className='input-ico' src={searchLogo} alt='search-ico'/>
                </div>
            }

        </header>
    )
}

export default Header