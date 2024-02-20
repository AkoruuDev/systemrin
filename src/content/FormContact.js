/* eslint-disable react/jsx-pascal-case */
import { Button_Hightlight, CollumGrid, FormBox, Input, InputArea, InputBox, RowGrid } from "../styles";

function FormContact() {
    return(
        <FormBox>
            <RowGrid>
                <CollumGrid>
                    <InputBox>
                        <label htmlFor="name">Nome:</label>
                        <Input type="text" id="name"/><br/>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="email">E-mail:</label>
                        <Input type="email" id="email"/><br/>
                    </InputBox>
                </CollumGrid>
                <InputBox>
                    <label htmlFor="message">Mensagem:</label><br/>
                    <InputArea id="message"/><br/>
                </InputBox>
            </RowGrid>
            <InputBox><Button_Hightlight>Enviar</Button_Hightlight></InputBox>
    </FormBox>
    )
}

export {
    FormContact
}