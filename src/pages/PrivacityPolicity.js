/* eslint-disable react/jsx-pascal-case */
import styled from "styled-components"
import { Arrow } from "../icons"
import { Container, MainBox, Paragraph_orange, Quote_orange, RightQuote_orange, Subtitle_orange, TitleShort_orange, BoxArea } from "../styles"
import { useNavigate } from "react-router-dom"

function PrivacityPolicity() {

    const Navigate = useNavigate()

    return (
        <Container>
            <Position onClick={() => Navigate(-1)}><Arrow /></Position>
            <MainBox>
                <TitleShort_orange>Política de Privacidade do Site</TitleShort_orange>
                <RightQuote_orange>Data de Vigência: 28 de março de 2017</RightQuote_orange>

                <BoxArea>
                    <Paragraph_orange>Bem-vindo à Política de Privacidade do site "Rinhuix". A sua privacidade é fundamental para nós, e estamos comprometidos em proteger as informações pessoais que você compartilha conosco. Por favor, leia atentamente esta política para entender como coletamos, usamos, divulgamos e protegemos suas informações.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>1.</Quote_orange> Informações Coletadas</Subtitle_orange>
                    <Paragraph_orange>Informações de Registro: Ao se cadastrar no site "Rinhuix", podemos coletar informações como nome de usuário, endereço de e-mail e outras informações de perfil.</Paragraph_orange>
                    <Paragraph_orange>Informações de Participação no RPG: Durante sua participação no sistema de RPG, podemos coletar dados relacionados às suas interações, escolhas e contribuições para a narrativa.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>2.</Quote_orange> Uso das Informações</Subtitle_orange>
                    <Paragraph_orange>Utilizamos suas informações para fornecer e melhorar os serviços oferecidos pelo site "Rinhuix", incluindo a personalização da experiência de RPG.</Paragraph_orange>
                    <Paragraph_orange>Podemos usar seu endereço de e-mail para enviar comunicações relacionadas ao site, como atualizações, notificações e newsletters. Você pode optar por não receber essas comunicações a qualquer momento.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>3.</Quote_orange> Compartilhamento de Informações</Subtitle_orange>
                    <Paragraph_orange>Não compartilhamos suas informações pessoais com terceiros, a menos que seja necessário para fornecer os serviços solicitados por você ou exigido por lei.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>4.</Quote_orange> Segurança das Informações</Subtitle_orange>
                    <Paragraph_orange>Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>5.</Quote_orange> Cookies e Tecnologias Semelhantes</Subtitle_orange>
                    <Paragraph_orange>O site "Rinhuix" pode utilizar cookies e tecnologias semelhantes para melhorar a experiência do usuário, analisar tendências e administrar o site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>6.</Quote_orange> Acesso e Atualização de Informações</Subtitle_orange>
                    <Paragraph_orange>Você pode acessar e atualizar suas informações de perfil a qualquer momento. Se precisar de assistência, entre em contato conosco através dos canais de suporte disponíveis no site.</Paragraph_orange>
                    <Subtitle_orange><Quote_orange>7.</Quote_orange> Menores de Idade</Subtitle_orange>
                    <Paragraph_orange>O site "Rinhuix" não é destinado a menores de 13 anos. Não coletamos intencionalmente informações de menores de 13 anos. Se tomarmos conhecimento de que coletamos inadvertidamente informações de um menor de 13 anos, tomaremos medidas para excluí-las.</Paragraph_orange>
                    <Paragraph_orange>Ao continuar a usar o site "Rinhuix", você concorda com os termos desta Política de Privacidade. Reservamo-nos o direito de fazer alterações nesta política, e qualquer alteração será publicada nesta página com uma data de vigência atualizada. Se tiver dúvidas ou preocupações, entre em contato conosco. Agradecemos por confiar em nós com suas informações pessoais.</Paragraph_orange>
                </BoxArea>
            </MainBox>
        </Container>
    )
}

export {
    PrivacityPolicity,
}

const Position = styled.div`
    position: fixed;
    left: 10vw;
    top: 5vh;
`