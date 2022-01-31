import React from "react";

import pic from "./img/3.png";
import { BsTruck } from "react-icons/bs";
import { GiThreeLeaves } from "react-icons/gi";

import styled, { keyframes } from "styled-components";

import { fadeInLeft, fadeInRight } from "react-animations";
// import Radium, { StyleRoot } from "radium";
// import Fade from "react-reveal/Fade";
//
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${fadeInLeft}`;
const RightAnimate = keyframes`${fadeInRight}`;

const FeaturePage = () => {
	return (
		<Container>
			<FirstCard src={pic} />

			<SecondCard>
				<h4>Why Choose us</h4>
				<h1>Fresh Products in Santina Supermarket </h1>
				<div>the best place where you can get Quality african products</div>
				<Boxing>
					<Box>
						<GiThreeLeaves style={{ color: "white" }} />
					</Box>
					<TextHold>
						<Text>We server you better</Text>
						<Cont>
							when it comes to fresh and quality african products, we are the
							best.
						</Cont>
					</TextHold>
				</Boxing>
				<Boxing>
					<Box>
						<GiThreeLeaves style={{ color: "white" }} />
					</Box>
					<TextHold>
						<Text>High Quality Products</Text>
						<Cont>
							when it comes to fresh and quality african products, we are the
							best.
						</Cont>
					</TextHold>
				</Boxing>
				<Boxing>
					<Box>
						<GiThreeLeaves style={{ color: "white" }} />
					</Box>
					<TextHold>
						<Text>Trusted and Reliable</Text>
						<Cont>
							when it comes to fresh and quality african products, we are the
							best.
						</Cont>
					</TextHold>
				</Boxing>
			</SecondCard>
			<br />
			<br />
			<br />
		</Container>
	);
};

export default FeaturePage;
const Cont = styled.div`
	width: 320px;
	margin-top: 10px;
	@media screen and (max-width: 760px) {
		width: 250px;
		font-size: 15px;
	}
`;

const Text = styled.div`
	font-size: 17px;
	font-weight: bold;
	margin-top: 30px;
	@media screen and (max-width: 760px) {
		font-size: 15px;
		margin-top: 10px;
	}
`;

const TextHold = styled.div`
	margin-left: 20px;
`;

const Boxing = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: center; */
	/* margin: 10px; */
`;
const BoxHolder = styled.div`
	display: flex;
	align-items: center;
	/* background-color: black; */
	justify-content: center;
	flex-wrap: wrap;
	/* width: 100%; */
`;

const Box = styled.div`
	height: 40px;
	width: 40px;
	background: #7da63f;
	border-radius: 50%;
	/* border: 1px solid silver; */
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;

	:hover {
		/* background-color: red; */
		color: white;
	}

	@media screen and (max-width: 760px) {
		width: 50px;
		height: 50px;
		font-size: 20px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	flex-wrap: wrap;
	overflow: hidden;
`;

const FirstCard = styled.img`
	width: 900px;
	height: 700px;
	/* background-color: red; */
	object-fit: contain;
	animation: 4s ${bounceAnimation};

	@media screen and (max-width: 760px) {
		width: 320px;
		height: 200px;
	}
`;
const SecondCard = styled.div`
	width: 500px;
	height: 500px;
	margin-left: 20px;
	animation: 4s ${RightAnimate};
	h4 {
		color: #89a42d;
	}
	/* background-color: black; */
`;
