import React from "react";
import styled from "styled-components";
import pic from "./1.jpeg";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../AllSale/Mydata";

function ClientTes() {
	const settings = {
		dots: true,

		infinite: true,
		speed: 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Container>
			<Wrapper>
				<Para bgImage={pic} strength={900}>
					<Cont>
						<Title>Customer's FeedBack</Title>
						<ConTest>
							<Slider {...settings}>
								{Data.map((props) => (
									<ClintInfo key={props.id}>
										<Test>
											It was a lovely gesture and it’s certainly not something I
											get from other retailers (even the ones I shop with
											regularly). Because of this, santina supermarket is always
											the best .
										</Test>
										<br />
										<ImgName>"Gideon ekeke"</ImgName>
									</ClintInfo>
								))}
							</Slider>
						</ConTest>
					</Cont>
				</Para>
			</Wrapper>
		</Container>
	);
}

export default ClientTes;
const Test = styled.div`
	color: white;
	text-align: center;
	font-weight: 400;
	font-size: 25px;
	width: 100%;

	@media screen and (max-width: 800px) {
		font-size: 15px;
		width: 100%;
	}
`;

const ImgName = styled.div`
	font-size: 40px;
	height: 50px;
	font-weight: 600px;
	text-align: center;
	color: white;

	@media screen and (max-width: 800px) {
		font-size: 18px;
		width: 100%;
	}
`;

const ClintInfo = styled.div`
	width: 310px;
	height: auto;
	display: flex;
	flex-direction: column;
`;

const ConTest = styled.div`
	height: 300px;
	width: 60%;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 100px;
	font-size: 60px;
	padding-top: 40px;
	font-weight: 700;
	color: white;

	@media screen and (max-width: 800px) {
		font-size: 20px;
		padding-top: 10px;
		height: 50px;
	}
`;

const Cont = styled.div`
	width: 100%;
	height: 350px;
	background-color: black;
	opacity: 0.8;
	display: flex;
	flex-direction: column;

	align-items: center;
`;

const Para = styled(Parallax)`
	height: 350px;
	position: relative;

	@media screen and (max-width: 800px) {
		height: 250px;
	}
`;

const Container = styled.div``;
const Wrapper = styled.div`
	width: 100%;
	height: 400px;

	position: sticky;
`;
