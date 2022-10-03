import React from 'react';
import styles from './menu.module.css';

const Menu: React.FC<{ open: Function }> = ({ open }) => {
	const openHandler = (event: React.MouseEvent<HTMLLIElement>) => {
		open(event.currentTarget.innerText);
	}
	return (
		<ul className={styles.menu}>
			<li className={styles.item} onClick={openHandler}>Note</li>
			<li className={styles.item} onClick={openHandler}>Image</li>
			<li className={styles.item} onClick={openHandler}>Video</li>
			<li className={styles.item} onClick={openHandler}>To-do</li>
		</ul>
	);
};

export default Menu;