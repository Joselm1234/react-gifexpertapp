import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	//   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
	const [categories, setCategories] = useState(['One Punch']);
	//   const handleAdd = () => {
	//     setCategories(["Hunter", ...categories]);
	//   }
	return (
		<div>
			<h2 className="animate__animated animate__fadeIn">GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</div>
	);
};
