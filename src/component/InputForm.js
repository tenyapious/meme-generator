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
		bottomText: "",
		randomImage: "https://i.imgflip.com/30b1gx.jpg",
	});

	function handleClick() {
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: memeData[Math.floor(Math.random() * 100) + 1].url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<>
			<div className="form">
				<input
					type="text"
					placeholder="top text"
					className="top-text"
					name="topText"
					onChange={handleChange}
				/>

				<input
					type="text"
					placeholder="bottom text"
					className="bottom-text"
					name="bottomText"
					onChange={handleChange}
				/>

				<button className="form-btn" onClick={handleClick}>
					<img src={getNewMeme} />
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} alt="" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</>
	);
}

export default InputForm;
