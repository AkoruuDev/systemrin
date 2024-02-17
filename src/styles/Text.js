import styled from "styled-components";

const TextNav = styled.p`
    margin: 0 12px;
    color: #7e7e7e;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        transform: scale(1.05);
        color: #9c9c9c;
        font-weight: 700;
    }
`

const Title = styled.h1`
    font-size: 53px;
    color: #dbdbdb;
`

const Subtitle = styled.h2`
    font-size: 38px;
    color: #dbdbdb;
`

const Quote = styled.span`
    font-size: 20px;
    color: #dbdbdb;
`

const Paragraph = styled.p`
    font-size: 25px;
    color: #dbdbdb;
`

export {
    TextNav,
    Title,
    Subtitle,
    Quote,
    Paragraph
}