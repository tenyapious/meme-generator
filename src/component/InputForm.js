import React, { useEffect, useState } from "react";
import getNewMeme from "../img/get-new-meme.png";

function InputForm() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/30b1gx.jpg",
	});

	const [allMemes, setAllMemes] = useState([]);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((response) => {
				setAllMemes(response.data.memes);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log(allMemes);

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

	function handlePositionChange() {
		console.log("change");
	}

	return (
		<>
			<div className="form">
				<div className="top-text-container">
					<input
						type="text"
						placeholder="top text"
						className="top-text"
						name="topText"
						onChange={handleChange}
					/>
					<div className="position-container">
						<label>H</label>
						<input
							type="number"
							className="top-text-position-top"
							name="topTextPositionTop"
							onChange={handlePositionChange}
						/>
						<label>V</label>
						<input
							type="number"
							className="top-text-position-top"
							name="topTextPositionTop"
							onChange={handlePositionChange}
						/>
					</div>
				</div>

				<div className="top-text-container">
					<input
						type="text"
						placeholder="top text"
						className="top-text"
						name="topText"
						onChange={handleChange}
					/>
					<div className="position-container">
						<label>H</label>
						<input
							type="number"
							className="top-text-position-top"
							name="topTextPositionTop"
							onChange={handlePositionChange}
						/>
						<label>V</label>
						<input
							type="text"
							placeholder="bottom text"
							className="bottom-text"
							name="bottomText"
							onChange={handleChange}
						/>
					</div>
				</div>

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
