import React from "react";
import styled, { keyframes } from "styled-components";
import pic from "../img/1.png";
import { AiFillHome } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { fadeInLeft } from "react-animations";
// import Radium, { StyleRoot } from "radium";
// import Fade from "react-reveal/Fade";
//
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${fadeInLeft}`;

// animate__fadeInLeft;

const HeaderView = () => {
	const [show, setShow] = React.useState(false);

	const handleShow = () => {
		setShow(!show);
	};

	// const styles = {
	// 	fadeInLeft: {
	// 		animation: "x 1s",
	// 		animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
	// 	},
	// };

	return (
		<Container>
			<Logo src={pic} />
			<NavHold>
				<span>
					{" "}
					<AiFillHome />
					Home
				</span>
				<span>
					<AiFillShop />
					Shop
				</span>
				<span>
					{" "}
					<FaBookReader />
					About
				</span>
				<span>
					{" "}
					<MdContactPhone />
					Contact
				</span>
			</NavHold>
			<SideHold>
				{show ? (
					<GiCancel
						style={{ zIndex: 999, color: "black" }}
						onClick={handleShow}
					/>
				) : (
					<HiOutlineMenuAlt2 onClick={handleShow} />
				)}
			</SideHold>
			{show ? (
				<MainSide>
					<SubMenu>
						<div>
							{" "}
							<Logo src={pic} />
						</div>
						<a>
							<AiFillHome style={{ fontSize: "19px" }} />
							<span>Home</span>
						</a>

						<a>
							<AiFillShop style={{ fontSize: "19px" }} />
							<span>Shop</span>
						</a>
						<a>
							<FaBookReader style={{ fontSize: "19px" }} />
							<span>About</span>
						</a>
						<a>
							<MdContactPhone style={{ fontSize: "19px" }} />
							<span>Contact</span>
						</a>
					</SubMenu>
				</MainSide>
			) : null}
		</Container>
	);
};

export default HeaderView;

const SideHold = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		z-index: 1000;
		font-size: 30px;
		font-weight: bold;
		cursor: pointer;
	}
`;

const MainSide = styled.div`
	width: 100%;
	background: rgba(0%, 0%, 0%, 0.5);
	z-index: 1;
	height: 100vh;
	position: fixed;
	top: 0;
	color: black;
`;

const SubMenu = styled.div`
	display: none;
	z-index: 1000;
	animation: 1s ${bounceAnimation};

	button {
		margin-left: 20px;
		height: 35px;
		width: 120px;
		font-weight: bold;
		border-radius: 5px;
		border: none;
		// transform: scaleX(1);
		opacity: 1;
		cursor: pointer;
		font-size: 15px;
		margin-top: 30px;
		:hover {
			background-color: #1976d2;
			color: white;
			transform-origin: center left;
			transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
			// transform: scaleX(0.9);
			opacity: 0.8;
		}
	}
	@media screen and (max-width: 786px) {
		width: 300px;
		height: 100%;
		background-color: white;
		/* float: right; */
		border-radius: 0 0 0px 10px;
		display: flex;
		flex-direction: column;
		padding-left: 20px;
		position: fixed;
		color: black;
		z-index: 1000;
		padding-top: 50px;
		padding-left: 50px;
		a {
			/* width: 50%; */
			height: 40px;
			display: flex;
			align-items: center;
			margin-top: 15px;
			color: black;
			padding: 5px 30px;
			transition: all 350ms;
			/* transform: scale(1); */
			border-radius: 10px;

			:hover {
				background-color: #a2ce73;
				color: white;
			}

			&:after {
				content: "";
				position: absolute;
				height: 2px;
				background-color: black;
				right: 0;
				left: 20px;
				bottom: 20px;
				opacity: 1;
				transform: scaleX(1);
				transform-origin: center left;
				transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
			}
			img {
				width: 30px;
				height: 30px;
				object-fit: 15px;
				opacity: 0.4;
				transition: all 350ms;
			}
			span {
				margin-left: 30px;
				text-transform: uppercase;
				font-weight: bold;
				color: black;
			}
			&:hover {
				cursor: pointer;
				span {
					color: white;
				}
				img {
					opacity: 1;
				}
			}
		}
	}
`;

const Logo = styled.img`
	height: 50px;
	width: 150px;
	object-fit: cover;
`;
const NavHold = styled.div`
	span {
		/* margin: 10px; */
		font-weight: bold;
		cursor: pointer;
		padding: 10px 20px;
		border-radius: 10px;

		:hover {
			background-color: #a2ce73;
			color: white;
		}
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Container = styled.div`
	height: 70px;
	width: 100%;
	box-shadow: 2px -2px 9px 5px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 1090;
	background-color: white;
`;
