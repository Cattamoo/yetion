import React, {useState} from 'react';
import styles from "./header.module.css";
import Menu from "../menu/menu";
import ModalAdd from "../modalAdd/modalAdd";

const Header: React.FC<{save: Function}> = ({ save }) => {
	const [ addModal, setAddModal ] = useState<JSX.Element>(<></>);
	const openHandler = (type: BlockType) => {
		setAddModal(<ModalAdd type={type} save={saveHandler} close={closeHandler} />)
	}
	const closeHandler = () => {
		setAddModal(<></>);
	}
	const saveHandler = (type: BlockType, title: string, content: string) => {
		save((items: Block[]) => {
			const newItem: Block = {
				id: Date.now(),
				type,
				title,
				content
			}

			return [ ...items, newItem ];
		})
	}
	return (
		<header className={styles.header}>
			<span className={styles.title}>Yetion</span>
			<Menu open={openHandler} />
			{
				addModal
			}
		</header>
	);
}

export default Header;