import { useNavigate } from "react-router-dom"
import { Space } from "../icons"
import { Footer, NavArea, Quote, Section, TextNav } from "../styles"

function FooterComponent() {

    const Navigate = useNavigate()
    
    return (
        <Section>
            <Footer>
                <NavArea>
                    <TextNav onClick={() => Navigate('/contact')}>Contact Us</TextNav>
                    <TextNav onClick={() => Navigate('/blog/news')}>News</TextNav>
                    <TextNav onClick={() => Navigate('/roll')}>Roll</TextNav>
                    <TextNav onClick={() => Navigate('/explore')}>Explore</TextNav>
                </NavArea>
                <NavArea>
                    <TextNav onClick={() => Navigate('/terms-of-use')}>Rinhuix's terms of use</TextNav>
                    <TextNav onClick={() => Navigate('/privacity-policity')}>Privacity policity</TextNav>
                </NavArea>
                <Space />
                <Quote>Rinhuix © 2021 - All rights reserved</Quote>
                <a href="https://github.com/AkoruuDev" target="_blank" rel="noreferrer" >
                    <Quote>Created by Akoruu Dev</Quote>
                </a>
            </Footer>
        </Section>
    )
}

export {
    FooterComponent,
}