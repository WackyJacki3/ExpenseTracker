import React from 'react'
import style from "./Header.module.css"

const Header = () => {
  return (
    <div className={style.headerContainer}>
        <div className={style.header}>  
            <div className={style.headerLogo}>
                TrackSense <i className="fa-regular fa-credit-card"></i>
            </div>
            <div className={style.headerButton}>
                <a 
                    href="https://github.com/WackyJacki3"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                        <i className="fa-brands fa-github"></i>
                        Profile
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header