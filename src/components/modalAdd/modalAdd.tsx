import React from 'react';
import styles from './modalAdd.module.css'

const ModalAdd: React.FC<{ type: BlockType, save: Function, close: Function }> = ({ type, save, close }) => {
	const closeHandler = () => {
		close();
	}
	const saveHandler = () => {
		const title = document.querySelector<HTMLInputElement>(`.${styles.title}`)!.value;
		const content = document.querySelector<HTMLInputElement>(`.${styles.content}`)!.value;
		save(type, title, content);
		close();
	}
	return (
		<div className={styles.modalBG}>
			<div className={styles.modal}>
				<header>Add {type}...</header>
				<section>
					<span>Title</span>
					<input className={`${styles.input} ${styles.title}`} type='text' />
					<span>{type} {`${type === 'Image' || type === 'Video'? 'Url' : 'Content'}`}</span>
					{
						type === 'To-do'
						? <input className={`${styles.input} ${styles.content}`} type='text' />
						: <input className={`${styles.input} ${styles.content}`} type='text' />
					}
				</section>
				<footer>
					<button onClick={closeHandler}>취소</button>
					<button onClick={saveHandler}>저장</button>
				</footer>
			</div>
		</div>
	);
};

export default ModalAdd;