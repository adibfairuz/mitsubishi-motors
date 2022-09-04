import React from 'react'
import style from './style.module.css';
import IconMarker from '../../assets/icon-marker.svg';

const Card = (props) => {
    const {
        data = {},
        onClick = () => {}
    } = props
    return (
        <div onClick={() => onClick(data)} className={style['card']}>
            <div className={style['icon-marker']}>
                <img src={IconMarker} alt="icon-marker" />
            </div>
            <div className={style['details']}>
                <h4 className={style['title']}>{data?.title}</h4>
                <p className={style['description']}>{data?.address}</p>
                <ul className={style['services']}>
                    {
                        data?.services?.map(service => (
                            <li key={service}>{service}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card