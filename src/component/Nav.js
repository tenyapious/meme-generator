import React from "react";
import logo from "../img/troll-face.png";

function Nav() {
	return (
		<nav>
			<h1 id="logo">
				<img src={logo} className="logo-img" />
				Meme Generator
			</h1>
			<p className="nav-project">Project 3</p>
		</nav>
	);
}

export default Nav;
