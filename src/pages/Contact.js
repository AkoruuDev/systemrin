/* eslint-disable react/jsx-pascal-case */
import { FormContact } from "../content/FormContact";
import { Meet } from "../content/Meets";
import { discord, instagram, twitter, whatsapp } from "../db";
import { meets } from "../db/meets";
import { Container, Icon, MainBox, RowGrid, Subtitle_orange } from "../styles";

function Contact() {
    return (
        <Container>
            <MainBox>
                <Subtitle_orange>Redes sociais</Subtitle_orange>
                <RowGrid>
                    <a href={whatsapp.info} target="_blank" rel="noreferrer">
                        <Icon src={require("../assets/whatsapp.png")} alt="icon" />
                    </a>
                    <a href={instagram.rinhuix} target="_blank" rel="noreferrer">
                        <Icon src={require("../assets/instagram.png")} alt="icon" />
                    </a>
                    <a href={twitter.rinhuix} target="_blank" rel="noreferrer">
                        <Icon src={require("../assets/twitter.png")} alt="icon" />
                    </a>
                    <a href={discord.barDoJoe} target="_blank" rel="noreferrer">
                        <Icon src={require("../assets/discordia.png")} alt="icon" />
                    </a>                        
                </RowGrid>
                <Subtitle_orange>Caixa de mensagem</Subtitle_orange>
                <FormContact />
                <Subtitle_orange>Próximas sessões presenciais</Subtitle_orange>
                {/* <RowGrid>
                    {meets.map((e, i) => {
                        if (!e.isOnline) return <Meet key={i} meet={e}/>
                        return null;
                    })}
                </RowGrid>
                <Subtitle_orange>Próximas sessões online</Subtitle_orange>
                <RowGrid>
                    {meets.map((e, i) => {
                        if (e.isOnline) return <Meet key={i} meet={e}/>
                        return null;
                    })}
                </RowGrid> */}
            </MainBox>
        </Container>
    )
}

export { Contact };