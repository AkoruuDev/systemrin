/* eslint-disable react/jsx-pascal-case */
import styled from "styled-components";
import { Box, Container, Logo3x3, Title, Quote, Section, Subtitle } from "../styles";
import { Space } from "../icons";
import { FooterComponent, HeaderComponent } from "../content";

function Home() {

    return (
        <Container>
            <HeaderComponent />
            <Box>
                <Logo3x3 src={require("../assets/logo-white.png")} alt="Logo" />
                <Title>Rinhuix</Title>
                <Quote>tell me child, what would have in your perfect world?</Quote>
            </Box>
            <SecSec>
                <section>            
                    <Subtitle>Listen to your calling</Subtitle>
                    <Space />
                    <Quote>What if all your life was just a dream and now you woke up</Quote>
                    <Quote>And everything around you would be new and wondrous, with dragons and magic, and you were part of that everything?</Quote>
                    <Space />
                    <Quote>Live in a new world and meet new people</Quote>
                    <Quote>Explore dungeons and receive amazing items</Quote>
                    <Quote>Craft your own perfect world</Quote>
                </section>
            </SecSec>
            <FooterComponent />
        </Container>
    )
}

export { Home };


const SecSec = styled(Section)`
    background-color: #3d3d3d;
    margin-top: 50px;
    padding: 40px 0;
    border-radius: 50px 50px 0 0;

    & section {
        width: 65vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`