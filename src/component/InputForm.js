import React, { useState } from "react";
import getNewMeme from "../img/get-new-meme.png";
import memeData from "../memeData";

// fetch("https://api.imgflip.com/get_memes")
// 	.then((response) => response.json())
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((err) => console.log(err));

function InputForm() {
	const [meme, setMeme] = useState({
		topText: "",
		bottom: "",
		randomImage: "https://i.imgflip.com/30b1gx.jpg",
	});

	function handleNewMeme() {
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: memeData[Math.floor(Math.random() * 100) + 1].url,
		}));
	}

	return (
		<>
			<div className="form">
				<input type="text" placeholder="top text" className="top-text" />
				<input type="text" placeholder="bottom text" className="bottom-text" />
				<button className="form-btn" onClick={handleNewMeme}>
					<img src={getNewMeme} />
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} alt="" />
			</div>
		</>
	);
}

export default InputForm;
