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

const MainBox = styled.section`
    width: 65vw;
    margin: 50px 0;
    padding: 50px 100px;
    background-color: #292929;

    color: #ffd1ab;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const BoxArea = styled.div`
    width: 100%;
`

const Brick = styled.div`
    height: 250px;
    margin: 5px;
    padding: 25px;
    background-color: #7e7e7e;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #8f8f8f;
        transform: scale(1.05);
    }
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
    MainBox,
    BoxArea,
    Brick,
    Footer
}
