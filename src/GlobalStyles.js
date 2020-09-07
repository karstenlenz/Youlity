import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    font-size: 112.5%;
    margin: 0 auto;
    max-width: 900px;
}

main {
    padding: 15px;
}


h1 {
    font-size: 1.611em ;
}

h2 {
    font-size: 1.464em ;
}

h3 {
    font-size: 1.331em;
}

h4 {
    font-size: 1.21em;
}

h5 {
    font-size: 1.1rem;
}

h6 {
    font-size: 1erm;
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

}
`
