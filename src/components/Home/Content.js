import styled from 'styled-components'

const Content = styled.div`
    color: #020024;
    grid-area: ${props => props.contentArea};
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    padding-top: 1vw;
`

export default Content;
