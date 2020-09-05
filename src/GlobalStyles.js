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

h1 {
    font-size: 1.611rem ;
    font-family: 'Ubuntu', sans-serif;
}

h2 {
    font-size: 1.464rem ;
    font-family: 'Ubuntu', sans-serif;
}

h3 {
    font-size: 1.331rem;
    font-family: 'Ubuntu', sans-serif;
}

h4 {
    font-size: 1.21rem;
    font-family: 'Ubuntu', sans-serif;
}

h5 {
    font-size: 1.1rem;
    font-family: 'Ubuntu', sans-serif;
}

h6 {
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
}


:root {
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
`
