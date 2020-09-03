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
    font-size: 29px;
}

h2 {
    font-size: 26px;
}

h3 {
    font-size: 26px;
}

h4 {
    font-size: 23px;
}

h5 {
    font-size: 20px;
}

h6 {
    font-size: 18px;
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
