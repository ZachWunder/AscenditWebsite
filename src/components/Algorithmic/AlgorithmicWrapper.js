import styled from 'styled-components'

const AlgorithmicWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "main-content-1 main-content-1 main-content-1"
        "left-gutter-2 main-content-2 right-gutter-2"
        "left-gutter-3 main-content-3 right-gutter-3"
        "left-gutter-4 main-content-4 right-gutter-4";
`

export default AlgorithmicWrapper;
