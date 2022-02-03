import React, { useRef } from "react";
import styled from "styled-components";
import pic from "../DSlider/img/11.jpeg";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_qt9leu8",
				"template_ttp4zmm",
				form.current,
				"user_tP1EUDKavDI26wO4VO7pC",
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		e.target.reset();
	};

	return (
		<Container>
			<HeroHold>
				<ImageHold src={pic} />
			</HeroHold>
			<ContentHold>
				{" "}
				<CardHold>
					<Card>
						<IconHold>
							<HiOutlineMail />
						</IconHold>
						<h3>Email</h3>
						<Text1>Santinagroceries@gmail.com</Text1>
					</Card>
					<Card>
						<IconHold>
							<GrLocation />
						</IconHold>
						<h3>Location</h3>
						<Text1>
							276 Ontario Street, Unit #2 St Catherine's Ontario, L2R 5L5
							Canada.
						</Text1>
					</Card>
					<a
						style={{ textDecoration: "none", color: "black" }}
						href='tel:416-278-3628'>
						<Card>
							<IconHold>
								<FiPhoneCall />
							</IconHold>
							<h3>Call</h3>
							<Text1>416-278-3628</Text1>
						</Card>
					</a>
				</CardHold>
				<MapDiv>
					<iframe
						src='https://maps.google.com/maps?q=276%20Ontario%20Street,%20Canada.&t=&z=13&ie=UTF8&iwloc=&output=embed'
						//   width="600"
						//   height="450"
						//   style={{border:0,
						//        allowfullscreen:"",
						//         loading:"lazy"}}
					></iframe>
				</MapDiv>
				<MainText>Ready To Get Started?</MainText>
				<p>
					you can send us a message to our email by filling all require details
					in the form
				</p>
				<FormHold ref={form} onSubmit={sendEmail}>
					<InputHold1>
						<Hold>
							{" "}
							<span>First Name* </span>
							<input name='fullname' type='text' required={true} />
						</Hold>
					</InputHold1>
					<InputHold1>
						<Hold>
							{" "}
							<span>Your Email* </span>
							<input name='email' type='text' required={true} />
						</Hold>
					</InputHold1>
					<InputHold1>
						<Hold>
							{" "}
							<span>Your Phone* </span>
							<input name='phone' type='text' required={true} />
						</Hold>
					</InputHold1>
					<InputHold1>
						<Hold>
							{" "}
							<span>Your Subject* </span>
							<input name='subject' type='text' required={true} />
						</Hold>
					</InputHold1>
					<InputHold1>
						<Hold>
							{" "}
							<span>Your Message* </span>
							<textarea name='message' type='text' required={true} />
						</Hold>
					</InputHold1>
					<button>Submit</button>
				</FormHold>
			</ContentHold>
		</Container>
	);
};

export default ContactPage;

const FormHold = styled.form`
	width: 50%;
	/* background-color: red; */
	flex-wrap: wrap;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	padding-bottom: 30px;

	@media screen and (max-width: 600px) {
		width: 100%;
	}

	button {
		height: 50px;
		width: 150px;
		/* margin-top: 30px; */
		border: none;
		outline: none;
		border-radius: 5px;
		color: white;
		background: #7da63f;
		font-weight: bold;
		cursor: pointer;
		margin-left: 10px;

		:hover {
			border-color: #d5deeb;
			border: 2px solid #d5deeb;
		}
	}
`;
const Hold = styled.div`
	display: flex;
	flex-direction: column;
	left: 20px;
	margin: 10px;

	span {
		padding-bottom: 10px;
		color: black;
		font-weight: bold;
	}
`;

const InputHold1 = styled.div`
	/* justify-content: center; */
	display: flex;
	align-items: center;
	input {
		height: 50px;
		/* margin: 10px; */
		width: 440px;
		border: 1px solid #d5deeb;
		outline: none;
		border-radius: 5px;
		display: flex;
		padding-left: 10px;
   	 	@media screen and (max-width: 790px) {
	    width : 450px;
	}
	 	@media screen and (max-width: 425px) {
	    width : 380px;
	}
	 	@media screen and (max-width: 375px) {
	    width : 330px;
	}
	
       	@media screen and (max-width: 320px) {
	    width : 300px;
	}


		:hover {
			border-color: #d5deeb;
		}


	

	}

	button {
		height: 35px;
		width: 150px;
		margin-top: 30px;
		border: none;
		outline: none;
		border-radius: 5px;
		color: white;
		background: #11468f;
		cursor: pointer;

		:hover {
			border-color: #d5deeb;
			border: 2px solid #d5deeb;
		}
	}

		textarea {
		height: 100px;
		/* margin: 10px; */
		width: 920px;
		border: 1px solid #d5deeb;
		outline: none;
		border-radius: 5px;
		display: flex;
		padding-left: 10px;

	 	@media screen and (max-width: 790px) {
	    width : 450px;
	}
	 	@media screen and (max-width: 425px) {
	    width : 380px;
	}
	 	@media screen and (max-width: 375px) {
	    width : 330px;
	}
	
       	@media screen and (max-width: 320px) {
	    width : 300px;
	}


		:hover {
			border-color: #d5deeb;
		}
`;

const MainText = styled.div`
	margin-top: 70px;

	font-weight: bold;

	font-size: 35px;

	text-align: center;

	@media screen and (max-width: 600px) {
		font-size: 20px;
	}
`;

const MapDiv = styled.div`
	margin-top: 70px;
	height: 400px;
	width: 100%;
	iframe {
		height: 400px;
		width: 100%;
		border: none;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		iframe {
			width: 100%;
		}
	}
`;

const Text1 = styled.div`
	text-align: center;

	@media screen and (max-width: 600px) {
		width: 280px;
	}
`;
const IconHold = styled.div`
	height: 100px;
	width: 100px;
	/* margin-top: 10px; */
	background-color: #d9e8c5;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 35px;
	color: black;
`;

const ContentHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p {
		text-align: center;
		width: 90%;
	}
`;

const CardHold = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fefefe;
	flex-wrap: wrap;
`;
const Card = styled.div`
	height: 250px;
	width: 350px;
	background: white;
	box-shadow: 0 8px 32px 0 rgba(1, 38, 15, 0.19);
	border-radius: 5px;
	transition: all 350ms;
	margin: 10px;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	a {
		text-decoration: none;
		color: black;
	}

	:hover {
		cursor: pointer;
		transition: all 350ms;
		transform: scale(1.01);
		margin-top: -10px;
	}

	@media screen and (max-width: 600px) {
		width: 320px;
	}
`;

const ImageHold = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const Container = styled.div`
	min-height: 70vh;
	font-family: Raleway;
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
		content: "Contact us";
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
