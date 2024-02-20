import styled from "styled-components";

const Icon = styled.img`
    width: calc((20vw / 4) - (12 * 4));
    padding: 12px;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.2);
    }
`

export {
    Icon,
}