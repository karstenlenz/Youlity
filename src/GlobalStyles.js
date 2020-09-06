import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    font-size: 112.5%;
    margin: 0 auto;
    max-width: 900px;
    font-family: 'Cabin', sans-serif; ;
}

main {
    padding: 15px;
}

h1,h2,h3,h4,h5,h6 {
    font-family: 'Ubuntu', sans-serif;
    text-align:center;
}


h1 {
    font-size: 1.611rem ;
}

h2 {
    font-size: 1.464rem ;
}

h3 {
    font-size: 1.331rem;
}

h4 {
    font-size: 1.21rem;
}

h5 {
    font-size: 1.1rem;
}

h6 {
    font-size: 1rem;
}


:root {
    --background:-1;
--overlay-bg:100;
--overlay-content:200;

--primary: #683B89;
--secondary: #00C5AA;
--highlight: #65C2FD;
--light-grey: #E0E9F1;
--medium-grey: #B2A7B8;
--dark-grey: #4C4452;

--primary-shadow:  0px 3px 6px 3px rgba(63, 0, 110, 0.16);
--secondary-shadow:  0px 3px 6px 3px rgba(0,197,170, 0.16);
}


a {
    text-decoration:none;
    }

img {
    display:block;
    margin:0 auto;
    }
`
