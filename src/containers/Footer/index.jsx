import React from 'react'
import style from './style.module.css';
import IconFacebook from '../../assets/icon-facebook.svg';
import IconTwitter from '../../assets/icon-twitter.svg';
import IconInstagram from '../../assets/icon-instagram.svg';
import IconYoutube from '../../assets/icon-youtube.svg';
import IconEmail from '../../assets/icon-email.svg';

const Footer = () => {
  return (
    <footer className={style['footer']}>
        <div className={style['contact']}>
            <div className={style['contact-wrapper']}>
                <div className={style['text-1']}>STAY CONNECTED WITH US</div>
                <div className={style['socmed']}>
                    <img className={style['icon']} src={IconFacebook} alt="social-media" />
                    <img className={style['icon']} src={IconTwitter} alt="social-media" />
                    <img className={style['icon']} src={IconInstagram} alt="social-media" />
                    <img className={style['icon']} src={IconYoutube} alt="social-media" />
                    <img className={style['icon']} src={IconEmail} alt="social-media" />
                </div>
                <div>Contact Us</div>
            </div>
        </div>
        <div className={style['copyright']}>
            <div>COPYRIGHT © 2022.</div>
            <div>PT MITSUBISHI MOTORS KRAMA YUDHA SALES INDONESIA</div>
        </div>
    </footer>
  )
}

export default Footer