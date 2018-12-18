import styled from 'styled-components'

const Content = styled.div`
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    grid-area: ${props => props.contentArea};
    padding-top: 1.5vw;
`

export default Content;
