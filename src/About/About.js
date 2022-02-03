import React, { useEffect } from "react";
import styled from "styled-components";
import pic from "./1.jpeg";
import { IoMdCheckmark } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<Container>
			<Wrapper>
				<HeroHold>
					<ImageHold src={pic} />
				</HeroHold>

				<Cont>
					<Hold2>
						<Detailss>
							<Title data-aos='zoom-in' data-aos-duration='1500'>
								About Us
							</Title>
							<Content data-aos='zoom-in' data-aos-duration='1500'>
								Santina African Caribeen Supermarket is a self-service shop
								offering a wide variety of food, beverages and household
								products, organized into sections.The supermarket typically has
								places for fresh meat, fresh produce, dairy, deli items, baked
								goods, etc.
							</Content>
							<AllM
								data-aos='fade-up'
								data-aos-duration='2500'
								data-aos-anchor-placement='top-bottom'>
								<IoCon />
								&nbsp; &nbsp;
								<span>Retail And Whole Sale </span>
							</AllM>
							<AllM
								data-aos='fade-up'
								data-aos-duration='2500'
								data-aos-anchor-placement='top-bottom'>
								<IoCon />
								&nbsp; &nbsp;
								<span>Premium Quality</span>
							</AllM>
							<AllM
								data-aos='fade-up'
								data-aos-duration='2500'
								data-aos-anchor-placement='top-bottom'>
								<IoCon />
								&nbsp; &nbsp;
								<span>Fast Delivery</span>
							</AllM>
							<AllM
								data-aos='fade-up'
								data-aos-duration='2000'
								data-aos-anchor-placement='top-bottom'>
								<IoCon />
								&nbsp; &nbsp;
								<span>Best Price</span>
							</AllM>

							<Button1 cl bt>
								View Sales
							</Button1>
						</Detailss>
						<MyImg
							data-aos='fade-up'
							data-aos-duration='2000'
							data-aos-anchor-placement='top-bottom'>
							<img src={pic} />
						</MyImg>
					</Hold2>
				</Cont>
			</Wrapper>
		</Container>
	);
}

export default About;

const IoCon = styled(IoMdCheckmark)`
	font-size: 24px;
	color: #7dae3f;
	font-weight: bold;

	@media screen and (max-width: 800px) {
		font-size: 15px;
	}
`;

const AllM = styled.div`
	display: flex;
	height: 45px;

	span {
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 4px;
	}

	@media screen and (max-width: 800px) {
		height: 40px;
		span {
			font-size: 14px;
		}
	}
`;

const Content = styled.div`
	height: 230px;
	width: 95%;
	line-height: 35px;
	font-size: 25px;

	@media screen and (max-width: 1024px) {
		height: 280px;
		line-height: 30px;
		font-size: 25px;
	}
	@media screen and (max-width: 800px) {
		height: 230px;
		line-height: 35px;
		font-size: 18px;
	}

	@media screen and (max-width: 425px) {
		height: 230px;
		line-height: 25px;
		font-size: 18px;
	}
	@media screen and (max-width: 375px) {
		height: 230px;
		line-height: 26px;
		font-size: 15px;
	}
	@media screen and (max-width: 320px) {
		height: 235px;
		line-height: 25px;
		font-size: 15px;
	}
`;

const Title = styled.div`
	height: 75px;
	width: 100%;

	font-weight: 700;
	font-size: 45px;

	@media screen and (max-width: 425px) {
		font-size: 23px;
		height: 50px;
	}
	@media screen and (max-width: 375px) {
		font-size: 23px;
		height: 50px;
	}
	@media screen and (max-width: 320px) {
		font-size: 23px;
		height: 50px;
	}
`;

const Detailss = styled.div`
	width: 55%;
	height: auto;
	margin-bottom: 30px;

	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		width: 775px;
	}
	@media screen and (max-width: 425px) {
		width: 400px;
	}
	@media screen and (max-width: 375px) {
		width: 350px;
	}

	@media screen and (max-width: 320px) {
		width: 310px;
	}
`;
const MyImg = styled.div`
	width: 45%;
	height: 550px;
	background-color: pink;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 800px) {
		width: 775px;
		height: 320px;
	}

	@media screen and (max-width: 425px) {
		width: 400px;
		height: 320px;
	}
	@media screen and (max-width: 375px) {
		width: 350px;
		height: 320px;
	}
	@media screen and (max-width: 320px) {
		width: 310px;
		height: 300px;
	}
`;
const Hold2 = styled.div`
	width: 80%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

const Cont = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;

	margin-top: 100px;

	@media screen and (max-width: 800px) {
		margin-top: 30px;
	}
`;

const Container = styled.div``;
const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
`;

const ImageHold = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const HeroHold = styled.div`
	height: 300px;
	width: 100%;

	/* opacity: 0.4; */
	position: relative;
	@media screen and (max-width: 600px) {
		height: 200px;
	}

	::before {
		content: "";
		position: absolute;
		height: 300px;

		width: 100%;
		background-color: #7da63f;
		opacity: 0.5;
		@media screen and (max-width: 600px) {
			height: 200px;
		}
	}

	::after {
		content: "About us";
		position: absolute;
		height: 300px;
		font-size: 40px;
		font-weight: bold;
		width: 100%;
		bottom: 20px;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;

		font-family: Raleway;

		z-index: 10;

		@media screen and (max-width: 600px) {
			font-size: 30px;
			height: 200px;
		}
	}
`;

const Button1 = styled.div`
	width: 200px;
	background-color: ${({ bt }) => (bt ? "#7dae3f" : "white")};

	height: 45px;
	color: ${({ cl }) => (cl ? "white" : "#7dae3f")};
	display: flex;
	justify-content: center;
	border-radius: 6px;
	align-items: center;
	margin-right: 30px;
	font-weight: 600;
	border: ${({ br }) => (br ? "1ps solid #7dae3f" : "#7dae3f")};
	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.1);
		background-color: white;
		color: #7dae3f;
		border: 1px solid #7dae3f;
	}
`;
