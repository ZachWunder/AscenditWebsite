import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
    color: inherit;
    text-decoration: none;
    &:active {
        color: #de2500;
    }
    &:hover {
        color: #de2500;
    }
    font-size: 1em;
`
