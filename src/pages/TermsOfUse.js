/* eslint-disable react/jsx-pascal-case */
import { useNavigate } from "react-router-dom"
import { Arrow } from "../icons"
import { Container, MainBox, Paragraph_orange, Quote_orange, RightQuote_orange, Subtitle_orange, TitleShort_orange, BoxArea } from "../styles"
import styled from "styled-components"

function TermsOfUse() {

    const Navigate = useNavigate()

    return(
        <>
        <Container>
            <Position onClick={() => Navigate(-1)}><Arrow /></Position>
            <MainBox>
                <TitleShort_orange>Termos e condições de uso do site</TitleShort_orange>
                <RightQuote_orange>Data de Vigência: 28 de março de 2017</RightQuote_orange>
                <BoxArea>
                    <Paragraph_orange>Bem-vindo ao "Rinhuix"! Estamos emocionados em ter você como parte da nossa comunidade. Antes de começar a explorar e participar das experiências que oferecemos, por favor, leia atentamente estes Termos de Uso. Ao acessar ou usar nosso site, você concorda em cumprir estes termos. Se não concordar com alguma parte destes termos, por favor, não use o site.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>1. </Quote_orange>Aceitação dos Termos</Subtitle_orange>
                    <Paragraph_orange>Ao acessar ou usar o site "Rinhuix", você concorda em cumprir estes Termos de Uso. Reservamo-nos o direito de modificar ou atualizar estes termos a qualquer momento, e sua continuação no uso do site após a publicação de quaisquer alterações constituirá aceitação dessas alterações.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>2. </Quote_orange>Conteúdo do Site</Subtitle_orange>
                    <Paragraph_orange>Todo o conteúdo exibido no site "Rinhuix", incluindo textos, imagens, gráficos, áudios e outros materiais, são de propriedade do "Rinhuix" ou usados com permissão. Você concorda em não reproduzir, distribuir, modificar ou criar trabalhos derivados do nosso conteúdo sem nossa autorização expressa.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>3. </Quote_orange>História e RPG</Subtitle_orange>
                    <Paragraph_orange>O "Rinhuix" apresenta uma história original e um sistema de RPG único. Ao participar do RPG, você concorda em seguir as regras estabelecidas e respeitar a narrativa criada pelos administradores do site. Compreendemos que a experiência de RPG é interativa, mas pedimos que todos os participantes ajam com respeito e consideração.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>4. </Quote_orange>Responsabilidades do Usuário</Subtitle_orange>
                    <Paragraph_orange>Ao usar o site "Rinhuix", você concorda em não realizar atividades que possam comprometer a segurança do site, interferir no seu funcionamento adequado ou violar quaisquer leis aplicáveis. Você é responsável por todas as atividades associadas à sua conta.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>5. </Quote_orange>Privacidade</Subtitle_orange>
                    <Paragraph_orange>Respeitamos sua privacidade. Consulte nossa Política de Privacidade para entender como tratamos suas informações pessoais.</Paragraph_orange>
                    <Paragraph_orange>Agradecemos por fazer parte da comunidade "Rinhuix". Divirta-se explorando nossa história e participando do RPG! Se tiver alguma dúvida ou preocupação, entre em contato conosco através dos canais de suporte disponíveis no site.</Paragraph_orange>
                </BoxArea>
            </MainBox>
        </Container>
        </>
    )
}

export {
    TermsOfUse,
}

const Position = styled.div`
    position: fixed;
    left: 10vw;
    top: 5vh;
`