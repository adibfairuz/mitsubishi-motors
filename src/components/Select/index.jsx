import React from 'react'
import style from './style.module.css';
import IconSearch from '../../assets/icon-search.svg';

const Select = (props) => {
	const {
		className,
		placeholder,
		items = [],
		onChange = () => {}
	} = props
    return (
        <div className={`${style['select']} ${className}`}>
			<div className={style['icon-search']}>
				<img src={IconSearch} alt="icon-search" />
			</div>
			<select onChange={onChange}>
				<option value="">{placeholder}</option>
				{
					items.map(item => (
						<option key={item.id} value={item.name}>{item.name}</option>
					))
				}
			</select>
        </div>
    )
}

export default Select