import React from "react";
import getNewMeme from "../img/get-new-meme.png";

function InputForm() {
	return (
		<form className="form">
			<input type="text" placeholder="top text" className="top-text" />
			<input type="text" placeholder="bottom text" className="bottom-text" />
			<button className="form-btn">
				<img src={getNewMeme} />
			</button>
		</form>
	);
}

export default InputForm;
