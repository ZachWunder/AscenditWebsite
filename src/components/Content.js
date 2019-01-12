import styled from 'styled-components'

const Content = styled.div`
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    grid-area: ${props => props.contentArea};
    padding-top: 2vw;
    margin-bottom: 2vw;
    margin-left: 2vw;
    margin-right: 2vw;
`

export default Content;
