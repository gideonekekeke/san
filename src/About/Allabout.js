import React from "react";
import styled from "styled-components";
import About from "./About";
import ClientTes from "./ClientTes";
import Count from "./Count";

function Allabout() {
	return (
		<>
			<About />
			<Count />
			<ClientTes />
		</>
	);
}

export default Allabout;

const Container = styled.div``;
const Wrapper = styled.div``;
