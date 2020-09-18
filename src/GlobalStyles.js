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

p {
    line-height:140%;
}


:root {
--background:-1;

--front:100;
--floating-button:200;
--overlay-bg:300;
--overlay-content:400;

--primary: #683B89;
--primary-disabled: #E1D7E7 ;
--secondary: #00C5AA;
--secondary-disabled: #B2EEE5;
--highlight: #65C2FD;
--light-grey: #E0E9F1;
--medium-grey: #B2A7B8;
--dark-grey: #4C4452;

--primary-shadow:  0 1px 6px 0 rgba(63, 0, 110, 0.16);
--secondary-shadow:  0 1px 6px 0 rgba(0,197,170, 0.16);

}


a {
    cursor:pointer;
    color:black;
    text-decoration:none;
    }

button 
    {
    cursor:pointer;    
    text-decoration:none;
    }

img {
    display:block;
    margin:0 auto;
    }
`
