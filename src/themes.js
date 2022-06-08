import { createGlobalStyle } from "styled-components";
 
export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};


export const blueTheme = {
  body: "#000080",
  fontColor: "#ffff00",
};



export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;
