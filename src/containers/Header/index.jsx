import React, { useState, useEffect } from 'react'
import style from './style.module.css';
import LogoMM from '../../assets/logo-mm-text.png';
import LogoEuro from '../../assets/logo-euro.png';
import IconHamburger from '../../assets/icon-hamburger.svg';
import IconChevronBottom from '../../assets/icon-chevron-bottom.svg';
import ImageBanner1 from '../../assets/image-banner-1.png';

const menu = [
    'ABOUT US',
    'EXPLORE CARS',
    'PROMO',
    'NEWS & EVENTS',
]

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 70) {
                return false
            }
            if (window.scrollY > lastScrollY) {
                setShow(false); 
            } else {
                setShow(true);  
            }
            setLastScrollY(window.scrollY); 
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])
    
    return (
        <header className={style['header']}>
            <nav
                style={{
                    height: show ? '80px' : '0px'
                }}
                className={style['navbar']}
            >
                {
                    show && (
                        <>
                            <div className={style['left']}>
                                <img className={style['logo-mm']} src={LogoMM} alt="logo-mitsubishi-motors" />
                            </div>
                            <div className={style['right']}>
                                <img className={style['logo-euro']} src={LogoEuro} alt="logo-euro" />
                                <ul className={style["menu"]}>
                                    {
                                        menu.map(item => (
                                            <li key={item}>
                                                <div className={style['text']}>{item}</div>
                                                <img className={style['icon']} src={IconChevronBottom} alt="icon-chevron-bottom" />
                                            </li>
                                        ))
                                    }
                                </ul>
                                <img className={style['icon-hamburger']} src={IconHamburger} alt="icon-hamburger" />
                            </div>
                        </>

                    )
                }
            </nav>
            <img className={style['banner']} src={ImageBanner1} alt="banner" />
        </header>
    )
}

export default Header