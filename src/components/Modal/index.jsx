import React, { useEffect } from 'react'
import style from './style.module.css'
import IconX from '../../assets/icon-x.svg';
import { createPortal } from 'react-dom';

const Modal = React.memo(({
	show,
	onHide,
	children,
	body = "",
}) => {
	
	if (show) {
		return createPortal(
			<div className={style.modal}>
				<div className={style.overlay} onClick={onHide} />
				<div className={style['modal-content']}>
					<img onClick={onHide} className={style['close-icon']} src={IconX} alt="x" />
					<div className={style['modal-body']}>
						<div>{body}</div>
						<div>{children}</div>
					</div>
				</div>
			</div>,
			document.getElementById('modal-root')
		)
	}
	return null
})

export default Modal