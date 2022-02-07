import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
// import pic from "../../img/ud1.png";
import { Link } from "react-router-dom";
import pic from "../img/1.png";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
	return (
		<Fragment>
			<Container>
				<Wrapper>
					<ContentWrapper>
						<ContentText1 to='/'>Home</ContentText1>

						<Direct1 to='/about'>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
					<ContentWrapper>
						<ContentText1 to='/about'>About Us</ContentText1>

						<Direct1 to='/about'>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
					<ContentWrapper>
						<ContentText1 to='/shop'>Shop</ContentText1>

						<Direct1 to='/about'>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
					<ContentWrapper>
						<ContentText1 to='/contact'>Contact</ContentText1>

						<Direct1 to='/about'>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
				</Wrapper>
			</Container>
			<BottomTab>
				<Tab>
					<Logo src={pic} />
					<span>
						Developed by{" "}
						<a
							href='/'
							target='blank'
							style={{ textDecoration: "none", color: "#7da63f" }}>
							DevTeam
						</a>{" "}
						🚀 | © {date} All rights reserved
					</span>
					<SocialLinks>
						<FaFacebookSquare style={{ margin: "10px" }} />
						<FaInstagram style={{ margin: "10px" }} />
						<FaYoutube style={{ margin: "10px" }} />
					</SocialLinks>
				</Tab>
			</BottomTab>
		</Fragment>
	);
};

export default Footer;

const Logo = styled.img`
	height: 50px;
	width: 150px;
	object-fit: cover;
`;
const Direct1 = styled(Link)`
	margin-top: 20px;
	text-align: left;
	text-decoration: none;
	color: black;
	/* width: 10rem; */
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct2 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct3 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct4 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct5 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const ContentWrapper = styled.div`
	margin: 10px;
	display: flex;
	flex-direction: column;
`;
const ContentWrapperm = styled.div`
	margin-left: 70px;
	@media screen and (max-width: 600px) {
		/* margin-left: 17px; */
	}
`;
const ContentText1 = styled(Link)`
	font-weight: bold;
	text-decoration: none;
	color: black;
`;
const ContentText2 = styled.div`
	font-weight: 300;
	@media screen and (max-width: 600px) {
		font-size: 10px;
		width: ;
	}
`;

const Container = styled.div`
	/* height: 300px; */
	width: 100%;
	/* margin-top: 20px; */
	background: #f8f8f8;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
`;

const Wrapper = styled.div`
	display: grid;
	/* margin: 10px; */
	grid-template-columns: repeat(4, minmax(0, 1fr));
	width: 80%;
	justify-content: center;
	margin-left: 150px;
	margin-top: 50px;
	/* background-color: red; */
	/* align-items: center; */
	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		/* margin: 0; */
		width: 100%;
		/* background: red; */
		padding-top: 10px;
		padding-bottom: 20px;
		margin-left: 10px;
	}
`;

const Tab = styled.div`
	width: 100%;
	/* height: 50px; */
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* margin: 0 40px; */
	flex-wrap: wrap;
	/* padding-bottom: 30px; */
`;

const BottomTab = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	background-color: #f8f8f8;
	/* flex-wrap: wrap; */
	padding-bottom: 50px;
	color: black;
	align-items: center;
	font-weight: bold;
	/* padding-bottom: 20px; */
	@media screen and (max-width: 700px) {
		font-size: 10px;
	}
	/* padding: 0 15px; */
`;
const SocialLinks = styled.div`
	font-size: 35px;
	height: 100%;
	display: flex;
	align-items: center;
	width: 170px;
	justify-content: center;
	cursor: pointer;

	/* background-color: red; */
	a {
		color: white;
	}
	@media screen and (max-width: 600px) {
		font-size: 17px;
		/* width: 70px; */
	}
`;
// const Logo = styled.img`
// 	width: 150px;
// 	height: 40px;
// 	object-fit: contain;
// `;
