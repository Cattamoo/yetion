import React from 'react';
import styles from './block.module.css';

const Block: React.FC<{ block: Block, remove: Function }> = ({ block, remove }) => {
	const removeHandler = () => {
		remove(block.id);
	}
	return (
		<div className={styles.block}>
			<button className={styles.button} onClick={removeHandler}>🗑</button>
			<span className={styles.title}>{block.title}</span>
			{
				block.type === 'Note'
				? <span className={`${styles.blockItem} ${styles.note}`}>{block.content}</span>
				: block.type === 'Image'
				? <img className={`${styles.blockItem} ${styles.image}`} src={block.content} alt={block.title} />
				: block.type === 'Video'
				? <iframe title={block.title} className={`${styles.blockItem} ${styles.video}`} src={block.content} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
				: block.type === 'To-do'
				? <span className={`${styles.blockItem} ${styles.todo}`}><input id={`todo${block.id}`} type='checkbox'/><label htmlFor={`todo${block.id}`}>{block.content}</label></span>
				: ''
			}
		</div>
	);
};

export default Block;