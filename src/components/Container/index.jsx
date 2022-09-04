import React from 'react'
import style from './style.module.css';

const Container = ({ children }) => {
  return (
    <div className={style['container']}>{children}</div>
  )
}

export default Container