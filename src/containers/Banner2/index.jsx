import React from 'react'
import style from './style.module.css';
import ImageBanner2 from '../../assets/image-banner-2.png';
import ImageAppstore from '../../assets/image-appstore.png';
import ImagePlaystore from '../../assets/image-playstore.png';

const Banner2 = () => {
  return (
    <div className={style['container']}>
        <div className={style['banner']}>
            <div className={style['filter']}>
                <h3 className={style['title']}>LIVE SIMPLE WITH <br /> MY MITSUBISHI</h3>
                <p className={style['decription']}>
                    Nikmati semua fasilitas berkendara Mitsubishi, 
                    dari book test drive hingga service berkala 
                    langsung dari tangan Anda dengan My Mitsubishi ID. 
                    Download aplikasinya sekarang di App Store dan Play Store.
                </p>
                <div className={style['download']}>
                    <img src={ImageAppstore} alt="playstore"/>
                    <img src={ImagePlaystore} alt="appstore"/>
                </div>
            </div>
            <img className={style['image']} src={ImageBanner2} alt="banner-2"/>
        </div>
    </div>
  )
}

export default Banner2