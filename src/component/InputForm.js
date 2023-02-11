import React, { useEffect, useState } from "react";
import getNewMeme from "../img/get-new-meme.png";

function InputForm() {
	const [meme, setMeme] = useState({
		text1: "",
		text2: "",
		randomImage: "https://i.imgflip.com/30b1gx.jpg",
	});

	const [allMemes, setAllMemes] = useState([]);

	const [memePosition, setMemePosition] = useState({
		text1h: 0,
		text1v: 0,
		text2h: 0,
		text2v: 0,
	});

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((response) => {
				setAllMemes(response.data.memes);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleClick() {
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: allMemes[Math.floor(Math.random() * allMemes.length)].url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	console.log(meme);
	console.log(memePosition);

	function handleMemePosition(event) {
		const { name, value } = event.target;

		setMemePosition((prevPosition) => ({ ...prevPosition, [name]: value }));
	}

	return (
		<>
			<div className="form">
				<div className="top-text-container">
					<input
						type="text"
						placeholder="text 1"
						className="text-1"
						name="text1"
						onChange={handleChange}
					/>
					<div className="position-container">
						<label>H</label>
						<input
							type="number"
							value={memePosition.text1h}
							className="text-1-h"
							name="text1h"
							step="10"
							onChange={handleMemePosition}
						/>
						<label>V</label>
						<input
							type="number"
							value={memePosition.text1v}
							className="text-1-v"
							name="text1v"
							step="10"
							onChange={handleMemePosition}
						/>
					</div>
				</div>

				<div className="top-text-container">
					<input
						type="text"
						placeholder="text 2"
						className="text-2"
						name="text2"
						onChange={handleChange}
					/>
					<div className="position-container">
						<label>H</label>
						<input
							type="number"
							value={memePosition.text2h}
							className="text-2-h"
							name="text2h"
							step="10"
							onChange={handleMemePosition}
						/>
						<label>V</label>
						<input
							type="number"
							value={memePosition.text2v}
							className="text-2-v"
							name="text2v"
							step="10"
							onChange={handleMemePosition}
						/>
					</div>
				</div>

				<button className="form-btn" onClick={handleClick}>
					<img src={getNewMeme} />
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} alt="" />
				<h2
					className="meme--text text-1"
					style={{
						left: `${memePosition.text1h}px`,
						top: `${memePosition.text1v}px`,
					}}
				>
					{meme.text1}
				</h2>
				<h2
					className="meme--text text-2"
					style={{
						left: `${memePosition.text2h}px`,
						bottom: `${memePosition.text2v}px`,
					}}
				>
					{meme.text2}
				</h2>
			</div>
		</>
	);
}

export default InputForm;
