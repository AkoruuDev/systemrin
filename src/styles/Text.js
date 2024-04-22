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
    width: 100%;
    margin: 20px 0;
    text-align: ${props => props.side ? props.side : 'center'};
    font-size: ${props => props.size ? props.size : '53'}px;
    color: ${props => props.color ? props.color : '#dbdbdb'};
`

const TitleShort = styled.h2`
    margin: 20px 0;
    font-size: 38px;
    color: #dbdbdb;
`

const Subtitle = styled.h2`
    margin: 20px 0;
    font-size: 28px;
    color: #dbdbdb;
`

const H3 = styled.h3`
    margin: 10px 0;
    font-size: 15px;
    color: #dbdbdb;
`

const Quote = styled.span`
    text-align: center;
    font-size: 25px;
    color: #dbdbdb;
`

const RightQuote = styled.span`
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 50px 0;
    color: #dbdbdb;
`

const Paragraph = styled.p`
    font-size: 25px;
    color: #dbdbdb;
    font-weight: 200;
`

const Title_orange = styled(Title)`
    color: #ffd1ab;
`

const TitleShort_orange = styled(TitleShort)`
    color: #ffd1ab;
`

const Subtitle_orange = styled(Subtitle)`
    color: #ffd1ab;
`

const H3_orange = styled(H3)`
    color: #ffd1ab;
`

const Quote_orange = styled(Quote)`
    color: #ffd1ab;
`

const RightQuote_orange = styled(RightQuote)`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 50px 0;
    color: #ffd1ab;
`

const Paragraph_orange = styled(Paragraph)`
    color: #ffd1ab;
`

const List = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & p {
        width: calc(100% - 40px);
    }
`


export {
    TextNav,
    Title,
    TitleShort,
    Subtitle,
    Quote,
    RightQuote,
    Paragraph,
    Title_orange,
    TitleShort_orange,
    Subtitle_orange,
    Quote_orange,
    RightQuote_orange,
    Paragraph_orange,
    H3, 
    H3_orange,
    List
}