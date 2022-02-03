import React from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

function Count() {
	React.useEffect(() => {
		Aos.init();
	}, []);
	return (
		<FactContainer>
			<QuickIcons>
				<QuickIconsWrap>
					<IconHolder data-aos='flip-up' data-aos-duration='1500'>
						<PercentHolder>100%</PercentHolder>
						<WriteHolder> Fresh Products</WriteHolder>
					</IconHolder>

					<IconHolder data-aos='flip-up' data-aos-duration='1500'>
						<PercentHolder>95%</PercentHolder>
						<WriteHolder>Customer services</WriteHolder>
					</IconHolder>

					<IconHolder data-aos='flip-up' data-aos-duration='1500'>
						<PercentHolder>100</PercentHolder>
						<WriteHolder>Experts Members</WriteHolder>
					</IconHolder>

					<IconHolder data-aos='flip-up' data-aos-duration='1500'>
						<PercentHolder>4</PercentHolder>
						<WriteHolder>Years Of Services</WriteHolder>
					</IconHolder>
				</QuickIconsWrap>
			</QuickIcons>
		</FactContainer>
	);
}

export default Count;

const IconHolder = styled.div`
	width: 250px;
	height: 180px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: 15px;

	@media screen and (max-width: 800px) {
		height: 70px;
	}
`;

const AvatHolder = styled.div`
	height: 70px;
	width: 70px;
	@media screen and (max-width: 425px) {
		height: 60px;
		width: 60px;
	}
`;

const PercentHolder = styled.div`
	font-size: 80px;
	font-weight: 600;
	color: #7dae3f;
	margin-top: -15px;

	@media screen and (max-width: 800px) {
		font-size: 40px;
	}
`;

const WriteHolder = styled.div`
	width: 100%;
	margin-top: 10px;
	font-weight: 500;
	font-size: 20px;
`;

const QuickIconsWrap = styled.div`
	width: 75%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const QuickIcons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const FactContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 10px 0;
	margin-top: 50px;

	@media screen and (max-width: 800px) {
		margin-top: 0px;
	}
`;
