import styled from 'styled-components'

const HomeWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 3fr 6fr;
    grid-template-areas:
      "description description description description"
      "api-content api-content algo-content algo-content";
    width: 100vw;
    height: 100vh;
`

export default HomeWrapper;
