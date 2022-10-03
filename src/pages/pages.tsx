import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./main/main";

const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
		</Routes>
	);
};

export default Pages;