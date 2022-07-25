# Pokedex

This project is a simple pokedex, using [React](https://pt-br.reactjs.org/), [PokeApi](https://pokeapi.co/docs/v2#pokemon-section) and [Netlify](https://www.netlify.com/).

The design has been based on [Dribbble design concept](https://dribbble.com/shots/15128634-Pokemon-Pokedex-Website-Redesign-Concept).

If you want to see how the project looks like, you can click here [Pokedex](https://edsonapf-pokemon-pokedex.netlify.app/).

## How to run

In the project directory, you need to run followings commands:

### `yarn install`

Install app dependencies.

> Before run the app, you need to create a *.env* file and set the following environment variable **REACT_APP_BASE_URL** with the base url from your backend. As I have used [PokeApi](https://pokeapi.co/docs/v2#pokemon-section), I have set the env var with the following value [https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
