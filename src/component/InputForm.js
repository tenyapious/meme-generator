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

	const [fontSize, setFontSize] = useState({
		text1FontSize: 40,
		text2FontSize: 40,
	});

	const [memeFontFamily, setMemeFontFamily] = useState("impact");

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

	function handleMemePosition(event) {
		const { name, value } = event.target;

		setMemePosition((prevPosition) => ({ ...prevPosition, [name]: value }));
	}

	function handleFontSize(event) {
		const { name, value } = event.target;

		setFontSize((prevFontSize) => ({ ...prevFontSize, [name]: value }));
	}

	function handleFontFamily(event) {
		setMemeFontFamily(event.target.value);
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
						<label htmlFor="text-1-h">H</label>
						<input
							type="number"
							value={memePosition.text1h}
							id="text-1-h"
							name="text1h"
							step="10"
							pattern="[0-9]*"
							onChange={handleMemePosition}
						/>
						<label htmlFor="text-1-v">V</label>
						<input
							type="number"
							value={memePosition.text1v}
							id="text-1-v"
							name="text1v"
							step="10"
							pattern="[0-9]*"
							onChange={handleMemePosition}
						/>
					</div>
					<div className="position-container">
						<label htmlFor="text-1-fontSize" className="fontSize">
							Font Size(px)
						</label>
						<input
							type="number"
							value={fontSize.text1FontSize}
							id="text-1-fontSize"
							name="text1FontSize"
							step="5"
							pattern="[0-9]*"
							onChange={handleFontSize}
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
						<label htmlFor="text-2-h">H</label>
						<input
							type="number"
							value={memePosition.text2h}
							id="text-2-h"
							name="text2h"
							step="10"
							pattern="[0-9]*"
							onChange={handleMemePosition}
						/>
						<label htmlFor="text-2-v">V</label>
						<input
							type="number"
							value={memePosition.text2v}
							id="text-2-v"
							name="text2v"
							step="10"
							pattern="[0-9]*"
							onChange={handleMemePosition}
						/>
					</div>
					<div className="position-container">
						<label htmlFor="text-2-fontSize" className="fontSize">
							Font Size(px)
						</label>
						<input
							type="number"
							value={fontSize.text2FontSize}
							id="text-2-fontSize"
							name="text2FontSize"
							step="5"
							pattern="[0-9]*"
							onChange={handleFontSize}
						/>
					</div>
				</div>

				<fieldset className="font-family">
					<legend>Font-family</legend>
					<label htmlFor="arial">Arial</label>
					<input
						type="radio"
						id="arial"
						name="fontFamily"
						value="arial"
						checked={memeFontFamily == "arial"}
						onChange={handleFontFamily}
					/>

					<label htmlFor="impact">Impact</label>
					<input
						type="radio"
						id="impact"
						name="fontFamily"
						value="impact"
						checked={memeFontFamily == "impact"}
						onChange={handleFontFamily}
					/>
				</fieldset>

				<button className="form-btn" onClick={handleClick}>
					<img src={getNewMeme} />
				</button>
			</div>
			<div className="meme" style={{ fontFamily: memeFontFamily }}>
				<img src={meme.randomImage} alt="" />
				<h2
					className="meme--text text-1"
					style={{
						left: `${memePosition.text1h}px`,
						top: `${memePosition.text1v}px`,
						fontSize: `${fontSize.text1FontSize}px`,
					}}
				>
					{meme.text1}
				</h2>
				<h2
					className="meme--text text-2"
					style={{
						left: `${memePosition.text2h}px`,
						bottom: `${memePosition.text2v}px`,
						fontSize: `${fontSize.text2FontSize}px`,
					}}
				>
					{meme.text2}
				</h2>
			</div>
		</>
	);
}

export default InputForm;
