import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display: grid;
    background: #1A2980;
    background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);
    background: linear-gradient(to right, #26D0CE, #1A2980);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      "title title title title"
      "nav-1 nav-2 nav-3 nav-4";
`

export default HeaderWrapper;

/*
PREV:
background: rgb(0,222,144);
background: radial-gradient(circle, rgba(0,222,144,1) 0%, rgba(2,0,36,1) 100%);
*/
