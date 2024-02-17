import styled from "styled-components";

const Header = styled.header`
    height: auto;
    width: 100vw;
    padding: 12px 0;
    background-color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavArea = styled.section`
    width: 65vw;
    padding: 14px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Nav = styled.nav`
    display: flex;
`

const Box = styled.div`
    width: 65vw;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Section = styled.section`
    width: 100vw;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Footer = styled.footer`
    width: 65vw;
    padding: 0 0 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export {
    Header,
    NavArea,
    Nav,
    Box,
    Section,
    Footer
}
