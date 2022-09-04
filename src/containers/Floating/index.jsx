import React, { useState } from 'react'
import style from './style.module.css';
import ImageMira from '../../assets/image-mira.png';
import IconX from '../../assets/icon-x-white.svg';
import IconMarker from '../../assets/icon-marker-thin.svg';
import IconDownload from '../../assets/icon-download.svg';
import IconCar from '../../assets/icon-car.svg';
import IconCalculator from '../../assets/icon-calculator.svg';
import IconPurchase from '../../assets/icon-purchase.svg';

const menu = [
    {
        name: 'FIND DEALER',
        icon: IconMarker,
    },
    {
        name: 'BROCHURE DOWNLOAD',
        icon: IconDownload,
    },
    {
        name: 'TEST DRIVE',
        icon: IconCar,
    },
    {
        name: 'CREDIT SIMULATION',
        icon: IconCalculator,
    },
    {
        name: 'PURCHASE CONSULTATION',
        icon: IconPurchase,
    },
]

const Floating = () => {
    const [isMiraShowing, setIsMiraShowing] = useState(true)
    const [isMenuShowing, setisMenuShowing] = useState(false)
  return (
    <div
        className={style['floating']}
        style={{
            width: isMenuShowing ? '100%' : 'auto' 
        }}
    >
        {
            isMiraShowing && (
                <div className={style['mira']}>
                    <img onClick={() => setIsMiraShowing(false)} className={style['icon-x']} src={IconX} alt="x" />
                    <div className={style['text']}>Ask MIRA</div>
                    <img className={style['image-mira']} src={ImageMira} alt="mira" />
                </div>
            )
        }
        <div
            style={{
                width: isMenuShowing ? '100%' : 'auto' 
            }}
            className={style['widget']}
        >
            <ul
                style={{
                    width: isMenuShowing ? '100%' : '0%' 
                }}
                className={style['menu']}
            >
                {
                    isMenuShowing && menu.map(item => (
                        <li key={item.name}>
                            <div className={style['text']}>
                                {item.name}
                            </div>
                            <img className={style['icon']} src={item.icon} alt="icon" />
                        </li>
                    ))
                }
            </ul>
            <div
                onClick={() => setisMenuShowing(!isMenuShowing)}
                className={style['button']}
                style={{
                    borderTopLeftRadius: isMenuShowing ? '0%' : '50%',
                    borderBottomLeftRadius: isMenuShowing ? '0%' : '50%'
                }}
            >
                <div className={style['square']}>
                    {
                        isMenuShowing
                            ? (
                                <img className={style['image-x']} src={IconX} alt="x" />
                                )
                            : (
                                <img className={style['image-car']} src={IconCar} alt="car" />
                            )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Floating