import React from 'react';
import Block from "../block/block";

const Blocks: React.FC<{ blocks: Block[], setBlocks: Function }> = ({ blocks, setBlocks }) => {
	const remove = (id: number) => {
		setBlocks((blocks: Block[]) => {
			return blocks.filter((block) => block.id !== id);
		})
	}
	return (
		<main>
			{
				blocks.map((block) => {
					return <Block key={block.id} block={block} remove={remove} />
				})
			}
		</main>
	);
};

export default Blocks;