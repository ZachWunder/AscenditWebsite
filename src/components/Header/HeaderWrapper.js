import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display: grid;
    background: rgb(0,222,144);
    background: radial-gradient(circle, rgba(0,222,144,1) 0%, rgba(2,0,36,1) 100%);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      "title title title title"
      "nav-1 nav-2 nav-3 nav-4";
    width: 100vw;
    height: 22vh;
`

export default HeaderWrapper;
