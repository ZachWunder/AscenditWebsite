import styled from 'styled-components'

const ExecutionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "content-left-1 tes1"
        "tes2 content-right-1"
        "content-left-2 tes3"
        "tes4 content-right-2"
`

export default ExecutionWrapper;
