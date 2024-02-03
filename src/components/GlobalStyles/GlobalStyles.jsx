import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600display=swap');

body {
    background-color: white;
    color: #121417;
    margin: 0;
    padding: 0;
    /* width: 100%;
    height: 100%; */
    font-family: 'Manrope', sans-serif;
   
}

a {
    text-decoration: none;
    color: currentColor;
}

p {
    padding: 0;
    margin: 0;
}


ul
 {
    list-style: none;
    padding: 0;
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

h2 {
    font-family: 'RobotoBold';
    /* color: #EFEDE8; */

}

img {
    display: block;
    max-width: 100%;
    height: auto;
}




button {
    cursor: pointer;
    border: none;
    font: inherit;

}


`;

export default GlobalStyles;
