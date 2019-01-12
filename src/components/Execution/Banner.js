import styled from 'styled-components'

export default styled.div`
    grid-area: banner;
    background: #1A2980;
    background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);
    background: linear-gradient(to right, #26D0CE, #1A2980);
    height: 40vh;
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 2.7em;
    color: #E7E8E9;
    padding-top: 5vw;
`

/*
blue&red radial:
background: rgb(222,37,0);
background: radial-gradient(circle, rgba(222,37,0,1) 49%, rgba(0,185,222,1) 85%);
red&blue:
background: rgb(0,185,222);
background: linear-gradient(0deg, rgba(0,185,222,1) 20%, rgba(222,37,0,1) 80%);
red:
background: rgb(231,232,233);
background: linear-gradient(0deg, rgba(231,232,233,1) 0%, rgba(222,37,0,1) 30%);
blue:
background: rgb(231,232,233);
background: linear-gradient(0deg, rgba(231,232,233,1) 0%, rgba(0,185,222,1) 30%);
*/
