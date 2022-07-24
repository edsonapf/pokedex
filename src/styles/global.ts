import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--white: #fff;
		--light-gray: #f6f8fc;
		--dark-gray: #828f98;
		--dark-blue: #041330;
		--box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
		--red: #ff5350;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

	body {
    background: var(--light-gray);
    color: var(--dark-blue);
    font-family: sans-serif;
		-webkit-font-smoothing: antialiased;
    padding: 2rem 6rem;

    @media (max-width: 720px) {
      padding: 2rem 4rem;
    }
  }

  button {
    cursor: pointer;
  }
`