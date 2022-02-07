import React from "react";
import { Link } from "react-router-dom";
import img from "../DSlider/img/7.jpg";
import styled, { keyframes } from "styled-components";

import { fadeInUp } from "react-animations";
// import Radium, { StyleRoot } from "radium";
// import Fade from "react-reveal/Fade";
//
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${fadeInUp}`;
function DownPut() {
	return (
		<Container>
			<Wrapper>
				<Allcom>
					<Title> Santina African Caribben Supermarket!</Title>

					<Contentt>
						when it comes to fresh and quality african products, we are the
						best..
						<br />
						We offer Delievery At $1/km and over $100 worth of products
					</Contentt>
					<Link style={{ textDecoration: "none" }} to='/contact'>
						<ButtonCon>Contact Us</ButtonCon>
					</Link>
				</Allcom>
			</Wrapper>
		</Container>
	);
}

export default DownPut;

const ButtonCon = styled.div`
	height: 50px;
	width: 250px;
	background-color: #fffeff;
	color: #89a42d;
	text-align: center;
	cursor: pointer;
	transform: scale(1);
	transition: all 350ms;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	font-weight: 600;
	/* margin-top: -25px; */
	a {
		text-decoration: none;
		color: #89a42d;
	}
	&:hover {
		transform: scale(1.03);
	}
	@media screen and (max-width: 425px) {
		margin-top: 30px;
	}
`;

const Contentt = styled.div`
color:#fffeff;
height: 50px;
width: 600px;
text-align: center;
font-size: 15px;
@media screen and (max-width:650px){
  width: 100%;
  color : black;
  font-weight: bold;
}
}
`;

const Small = styled.div`
	width: 50px;
	height: 10px;
	background-color: #ef9f26;
	/* margin-top: 10px; */
	margin-bottom: 20px;
`;

const Title = styled.div`
	color: #fffeff;
	height: 120px;
	width: 600px;
	font-size: 35px;
	text-align: center;
	font-weight: 600;
	@media screen and (max-width: 425px) {
		width: 400px;
		font-size: 25px;
		color: black;
	}
	@media screen and (max-width: 375px) {
		width: 350px;
		font-size: 23px;
		font-weight: 600;
		color: black;
	}
	@media screen and (max-width: 320px) {
		width: 300px;
		font-size: 20px;
		font-weight: 600;
		height: 80px;
		color: black;
	}
`;

const Allcom = styled.div`
	height: 450px;
	width: 700px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 425px) {
		width: 95%;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 400px;
	background-image: url(${img});
	background-repeat: repeat-y;
	background-size: cover;
	animation: 4s ${bounceAnimation};
	overflow: hidden;
	@media screen and (max-width: 425px) {
		height: 450px;
	}
`;
const Wrapper = styled.div`
	width: 100%;
	height: 400px;
	overflow: hidden;
	// background-color: #fc1028;
	/* background-color: rgba(0, 0, 0, 0.9); */
	/* background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%); */
	background: linear-gradient(
		90deg,
		rgba(137, 164, 45, 0.9864320728291317) 37%,
		rgba(255, 255, 255, 0.8687850140056023) 74%,
		rgba(255, 255, 255, 0.8379726890756303) 96%,
		rgba(137, 164, 45, 1) 100%
	);
	opacity: 0.9;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 425px) {
		height: 450px;
	}
`;
