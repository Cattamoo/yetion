import React, {useState} from 'react';
import styles from './main.module.css';
import Blocks from "../../components/blocks/blocks";
import Header from "../../components/header/header";

function Main() {
	const [blocks, setBlocks] = useState<Block[]>([]);
	return (
		<div className={styles.app}>
			<Header save={setBlocks} />
			<Blocks blocks={blocks} setBlocks={setBlocks} />
		</div>
	);
}

export default Main;
