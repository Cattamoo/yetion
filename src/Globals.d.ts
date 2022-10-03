/// <reference types="react-scripts" />

// css module
declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

type BlockType = 'Note' | 'Image' | 'Video' | 'To-do';
type Block = {
	id: number;
	type: BlockType;
	title: string;
	content: string;
}