import React from "react";
import styled from "styled-components";
// import img from "./img/1.png"
import { FcLike } from "react-icons/fc";
import { RiSearchFill } from "react-icons/ri";
// import Data from "./Data.json"
import { Data } from "./Mydata";
import { Link } from "react-router-dom";

function Allsale() {
	return (
		<Container>
			<Wrapper>
				<Title>Our Product</Title>

				<Con>
					{Data?.map((props) => (
						<Card>
							<CardHold>
								<Bac className='im' imgUrl={props.img}>
									<Sale className='sc'>Sales</Sale>

									<Cover className='cover'>
										<DivCon>
											<Divvv>
												<FcLike
													style={{
														color: "green",
														fontSize: "25px",
													}}
												/>
											</Divvv>
											<Divvv>
												<RiSearchFill
													style={{
														color: "#7dae3f",
														fontSize: "25px",
													}}
												/>
											</Divvv>
										</DivCon>
									</Cover>
								</Bac>
							</CardHold>
							<Name>{props.name}</Name>
							<Name1>100% fresh</Name1>
						</Card>
					))}
				</Con>

				<Con2>
					<Link style={{ textDecoration: "none" }} to='/shop'>
						{" "}
						<ButtonCon>SEE LIST OF OUR PRODUCTS</ButtonCon>
					</Link>
				</Con2>
			</Wrapper>
		</Container>
	);
}

export default Allsale;

const ButtonCon = styled.div`
	height: 50px;
	width: 250px;
	background-color: #7dae3f;
	color: white;
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
		color: white;
	}
	&:hover {
		transform: scale(1.03);
	}
	@media screen and (max-width: 425px) {
		margin-top: 30px;
	}
`;

const Divvv = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Name1 = styled.div`
	width: 100%;
	height: 40px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #7dae3f;
	font-size: 20px;
	padding-bottom: 5px;
`;

const Name = styled.div`
	width: 100%;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 25px;
`;

const DivCon = styled.div`
	height: 60px;
	width: 40%;

	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Bac = styled.div`
	background-image: url(${(props) => props.imgUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	width: 93%;
	height: 93%;
	position: absolute;
	transition: all 850ms ease-in-out;
	transform: scale(1);

	:hover > .cover {
		transition: all 550ms;
		opacity: 1;
		cursor: pointer;
	}

	:hover > .sc {
		background-color: #7dae3f;
		color: white;
		transform: scale(1.1);
		transition: all 550ms;
	}

	:hover {
		width: 100%;
		height: 100%;

		background-position: center;
		background-repeat: no-repeat;
		transform: scale(1);
	}
`;

const Icon = styled.div``;

const Cover = styled.div`
	/* background: rgba(54, 193, 87, 0.8); */
	flex: 1;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	/* border-radius: 10px 10px 0px 0px; */
	opacity: 0;
	z-index: 1;
	display: flex;
	/* justify-content: flex-end; */
	align-items: flex-end;
	justify-content: center;
`;

const Sale = styled.div`
	height: 35px;
	width: 80px;
	background-color: white;
	color: black;
	position: relative;
	top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	left: 10px;
	font-weight: 500;
`;

const Image = styled.img`
	width: 95%;
	height: 95%;
	object-fit: contain;
	/* border-radius: 10px 10px 0px 0px; */
`;

const CardHold = styled.div`
	width: 100%;
	height: 350px;
	background-color: #d9e8c5;
	color: black;
	position: relative;

	/* border-radius: 10px 10px 0px 0px; */

	@media screen and (max-width: 800px) {
		width: 100%;
		height: 400px;
		background-color: #d9e8c5;

		position: relative;
	}
	@media screen and (max-width: 425px) {
		width: 100%;
		height: 270px;
		background-color: #d9e8c5;

		position: relative;
	}
	@media screen and (max-width: 320px) {
		width: 100%;
		height: 270px;
		background-color: #d9e8c5;

		position: relative;
	}
`;

const Card = styled.div`
	height: 350px;
	width: 300px;
	margin: 20px;
	/* border-radius: 10px; */
	display: flex;
	flex-direction: column;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	@media screen and (max-width: 800px) {
		width: 600px;
		height: 600px;
		margin-bottom: 10px;
	}

	@media screen and (max-width: 425px) {
		width: 300px;
		height: 350px;
	}

	@media screen and (max-width: 375px) {
		width: 300px;
		height: 350px;
	}

	@media screen and (max-width: 320px) {
		width: 290px;
		height: 350px;
	}
`;

const Container = styled.div`
	height: auto;
	margin-top: 80px;
`;

const Title = styled.div`
height: 80px;
width: 100%;
text-align: center;|
display: flex;
text-align: center;
justify-content: center;
color:#7dae3f;
font-weight: 500;
font-size: 50px;
letter-spacing: 3px;

@media screen and (max-width:768px){
  font-size: 20px;

  height: 30px;
  font-weight:600;
}
`;
const Wrapper = styled.div`
width: 100%;
height: auto

display: flex;
flex-direction: column;
`;
const Con = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 30px;

	@media screen and (max-width: 800px) {
		width: ;
	}
`;
const Con2 = styled.div`
	/* height: 100px; */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: green; */
`;
