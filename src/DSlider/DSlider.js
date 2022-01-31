import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./img/1.jfif";
import img2 from "./img/2.jpg";
import img5 from "./img/5.jpg";
import img4 from "./img/4.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";

function DSlider() {
	var settings = {
		infinite: false,
		fade: true,
		speed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		infinite: true,
		autoplay: true,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Container>
			<Wrapper>
				<Con1>
					<Connnt>
						<Title>100% Fresh African Products</Title>
						<Litcon>
							the best place where you can get Quality african products
						</Litcon>
						<AllBu>
							<Button1 cl bt>
								View Sales
							</Button1>
							<Button2 br>Shop all</Button2>
						</AllBu>
					</Connnt>
				</Con1>
				<Con2>
					<CurveB>
						<HoldAll>
							<Slider {...settings}>
								<Comimg>
									<img src={img7} />
								</Comimg>
								<Comimg>
									<img src={img8} />
								</Comimg>
								<Comimg>
									<img src={img9} />
								</Comimg>
								<Comimg>
									<img src={img10} />
								</Comimg>
							</Slider>
						</HoldAll>
					</CurveB>
				</Con2>
			</Wrapper>
		</Container>
	);
}

export default DSlider;

const Comimg = styled.div`
	width: 500px;
	height: 800px;
	border-radius: 50%;
	border: 4px solid white;
	background-color: pink;
	margin-top: 80px;
	margin-left: 50px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	@media screen and (max-width: 768px) {
		width: 500px;
		height: 500px;
		border-radius: 50%;
		margin-top: -35px;
		margin-left: 10px;
	}
	@media screen and (max-width: 425px) {
		width: 370px;
		height: 390px;
		border-radius: 50%;
		margin-top: -35px;
		margin-left: 10px;
	}
	@media screen and (max-width: 375px) {
		width: 370px;
		height: 390px;
		border-radius: 50%;
		margin-top: -35px;
		margin-left: 10px;
	}
	@media screen and (max-width: 320px) {
		width: 370px;
		height: 390px;
		border-radius: 50%;
		margin-top: -35px;
		margin-left: 10px;
	}
`;

const HoldAll = styled.div`
	height: 900px;
	width: 800px;

	@media screen and (max-width: 768px) {
		width: 500px;
		height: 450px;
		border-radius: 50%;
	}

	@media screen and (max-width: 425px) {
		width: 450px;
		height: 360px;
		border-radius: 50%;
	}

	@media screen and (max-width: 375px) {
		width: 390px;
		height: 350px;
		border-radius: 50%;
	}

	@media screen and (max-width: 320px) {
		width: 360px;
		height: 355px;
		border-radius: 50%;
	}
`;

const Button1 = styled.div`
	width: 170px;
	background-color: ${({ bt }) => (bt ? "#7dae3f" : "white")};

	height: 45px;
	color: ${({ cl }) => (cl ? "white" : "#7dae3f")};
	display: flex;
	justify-content: center;
	border-radius: 25px;
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
const Button2 = styled.div`
	width: 170px;
	background-color: ${({ bt }) => (bt ? "#7dae3f" : "white")};
	height: 45px;
	color: ${({ cl }) => (cl ? "white" : "#7dae3f")};
	display: flex;
	justify-content: center;
	border-radius: 25px;
	align-items: center;
	border: ${({ br }) => (br ? "1px solid #7dae3f" : "#7dae3f")};

	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.1);
		background-color: #7dae3f;
		color: white;
		border: 1px solid #7dae3f;
	}
`;
const AllBu = styled.div`
	width: 500px;
	height: 200px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: 700px;
		height: 150px;
		/* margin-top: 30px; */
	}

	@media screen and (max-width: 425px) {
		width: 405px;
		height: 90px;
		margin-top: -20px;
	}

	@media screen and (max-width: 375px) {
		width: 350px;
		height: 150px;
		margin-top: -10px;
	}

	@media screen and (max-width: 320px) {
		width: 290px;
		height: 140px;
		/* margin-top: 30px; */
	}
`;

const Litcon = styled.div`
	width: 500px;
	height: 150px;
	font-size: 20px;
	font-weight: 500;
	color: #05172c;

	@media screen and (max-width: 768px) {
		width: 700px;
		height: 300px;
		font-size: 25px;
		font-weight: 500;
		line-height: 30px;
		margin-top: 10px;
	}

	@media screen and (max-width: 425px) {
		width: 405px;
		height: 85px;
		font-size: 15px;
		font-weight: 500;
		line-height: 20px;
		margin-top: -20px;
	}

	@media screen and (max-width: 375px) {
		width: 350px;
		height: 90px;
		font-size: 15px;
		font-weight: 500;
		line-height: 20px;
		margin-top: -20px;
	}

	@media screen and (max-width: 320px) {
		width: 290px;
		height: 60px;
		font-size: 15px;
		font-weight: 500;
		line-height: 20px;
		margin-top: -20px;
	}
`;
const Title = styled.div`
	width: 500px;
	height: 140px;
	font-weight: 600;
	font-size: 45px;

	@media screen and (max-width: 768px) {
		width: 700px;
		height: 300px;
		font-size: 65px;
		font-weight: 500;
		line-height: 60px;
	}

	@media screen and (max-width: 425px) {
		width: 405px;
		height: 160px;
		font-size: 45px;
		font-weight: 500;
		line-height: 50px;
	}

	@media screen and (max-width: 375px) {
		width: 350px;
		height: 145px;
		font-size: 35px;
		font-weight: 500;
		line-height: 40px;
	}

	@media screen and (max-width: 320px) {
		width: 290px;
		height: 130px;
		font-size: 30px;
		font-weight: 500;
		line-height: 40px;
	}
`;

const Connnt = styled.div`
	/* background-color:red; */
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const CurveB = styled.div`
	width: 800px;
	height: 920px;
	border-radius: 50%;
	background-color: #d9e8c5;
	/* z-index: 40; */
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: -100px;
	top: -150px;

	@media screen and (max-width: 768px) {
		width: 620px;
		height: 600px;
		border-radius: 50%;
	}

	@media screen and (max-width: 425px) {
		width: 450px;
		height: 420px;
		border-radius: 50%;
	}

	@media screen and (max-width: 375px) {
		width: 400px;
		height: 400px;
		border-radius: 50%;
	}

	@media screen and (max-width: 320px) {
		width: 370px;
		height: 390px;
		border-radius: 50%;
	}
`;

const Container = styled.div``;
const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	/* background-color: red; */
	@media screen and (max-width: 800px) {
		/* padding: 10px; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Con1 = styled.div`
	width: 50%;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color:green; */

	@media screen and (max-width: 768px) {
		width: 700px;
		height: 400px;
	}

	@media screen and (max-width: 425px) {
		width: 405px;
		height: 300px;
	}

	@media screen and (max-width: 375px) {
		width: 355px;
		height: 300px;
	}

	@media screen and (max-width: 320px) {
		width: 300px;
		height: 300px;
	}
`;
const Con2 = styled.div`
	width: 50%;
	height: 600px;
	width: 50%;
	height: 600px;
	/* position: -webkit-sticky; Safari */
	position: relative;
	overflow: hidden;
	/* background-color:red; */
	/* align-items: flex-end; */

	@media screen and (max-width: 768px) {
		width: 700px;
		height: 300px;
	}

	@media screen and (max-width: 425px) {
		width: 405px;
	}

	@media screen and (max-width: 375px) {
		width: 355px;
	}

	@media screen and (max-width: 320px) {
		width: 300px;

		height: 250px;
	}
`;
