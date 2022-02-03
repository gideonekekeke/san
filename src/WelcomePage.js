import React from "react";
import styled from "styled-components";
import { BsTruck } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const WelcomePage = () => {
	return (
		<Container>
			<MainHold>
				<h3>Welcome to Santina African Caribben Supermarket!</h3>
				<BoxHolder>
					<Boxing>
						<Box>
							<GiPriceTag />
						</Box>
						<TextHold>
							<Text>Retail and Wholesales</Text>
							<Cont>
								We offer Delievery At $1/km and over $100 worth of products
							</Cont>
						</TextHold>
					</Boxing>
					<Boxing>
						<Box>
							<MdVerified />
						</Box>
						<TextHold>
							<Text>100% fresh Products always</Text>
							<Cont>
								We offer Delievery At $1/km and over $100 worth of products
							</Cont>
						</TextHold>
					</Boxing>

					<Boxing>
						<Box>
							<BsTruck />
						</Box>
						<TextHold>
							<Text>Free Delievery</Text>
							<Cont>
								We offer Delievery At $1/km and over $100 worth of products
							</Cont>
						</TextHold>
					</Boxing>
				</BoxHolder>
			</MainHold>
		</Container>
	);
};

export default WelcomePage;

const Cont = styled.div`
	width: 320px;
	margin-top: 10px;
	@media screen and (max-width: 760px) {
		width: 250px;
		font-size: 15px;
	}
`;

const Text = styled.div`
	font-size: 20px;
	font-weight: bold;
	@media screen and (max-width: 760px) {
		font-size: 15px;
	}
`;

const TextHold = styled.div`
	margin-left: 20px;
`;

const Boxing = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
`;
const BoxHolder = styled.div`
	display: flex;
	align-items: center;
	/* background-color: black; */
	justify-content: center;
	flex-wrap: wrap;
	/* width: 100%; */
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	/* padding-bottom: 500px; */
	margin-top: 100px;

	@media screen and (max-width: 760px) {
		margin-top: 0px;
	}
`;

const MainHold = styled.div`
	/* background: silver; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	h3 {
		font-size: 25px;
		font-weight: bold;

		@media screen and (max-width: 760px) {
			text-align: center;
			font-size: 22px;
		}
	}
`;
const Box = styled.div`
	height: 100px;
	width: 100px;
	/* background: black; */
	border-radius: 50%;
	border: 1px solid silver;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	transition: all 350ms;

	${{ BsTruck }} {
		color: #7da63f;
	}
	${{ MdVerified }} {
		color: #7da63f;
	}
	${{ GiPriceTag }} {
		color: #7da63f;
	}

	:hover {
		background-color: #7da63f;
		color: white;
		transform: scale(0.9);
		cursor: pointer;

		${{ MdVerified }} {
			color: white;
		}
		${{ BsTruck }} {
			color: white;
		}
		${{ GiPriceTag }} {
			color: white;
		}
	}

	@media screen and (max-width: 760px) {
		width: 50px;
		height: 50px;
		font-size: 20px;
	}
`;
