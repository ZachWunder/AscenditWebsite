import styled from 'styled-components'

const NavTab = styled.div`
    color: #e7e8e9;
    grid-area: ${props => props.tabArea};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Sans JP', sans-serif;
    padding-left: 1vw;
    padding-right: 1vw;
`

export default NavTab;
