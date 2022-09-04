import React from 'react'
import style from './style.module.css';

const Button = (props) => {
	const {
		children,
		onClick = () => {},
		isLoading,
		variant = 'black',
		className = ''
	} = props
    return (
      	<button
			onClick={onClick}
			className={`${style[`button-${variant}`]} ${className}`}
			style={{
				opacity: isLoading ? '0.5' : '1'
			}}
			disabled={isLoading}
		>
			{
				isLoading
				?
				'LOADING...'
				:
				children
			}
		</button>
    )
}

export default Button