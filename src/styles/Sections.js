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

const Header_Nav = styled.section`
    height: 100px;
    width: 65vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const Footer = styled.footer`
    width: 65vw;
    padding: 25px 0;
    display: flex;
    justify-content: space-around;
`

export {
    Header,
    Header_Nav,
    Nav,
    Box,
    Footer
}
