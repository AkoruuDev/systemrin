import { useNavigate } from "react-router-dom"
import { Header, Logo1x1, Nav, NavArea, TextNav } from "../styles"

function HeaderComponent() {

    const Navigate = useNavigate()
    
    return (
        <Header>
            <NavArea>
                <Logo1x1 src={require("../assets/logo-golden.png")} alt="Logo" onClick={ () => Navigate('/') }/>
                <Nav>
                    <TextNav onClick={() => Navigate('/')}>Home</TextNav>
                    <TextNav onClick={() => Navigate('/systems')}>Systems</TextNav>
                    <TextNav onClick={() => Navigate('/universe')}>Universe</TextNav>
                    <TextNav onClick={() => Navigate('/about')}>About Us</TextNav>
                    <TextNav onClick={() => Navigate('/contact')}>Contact</TextNav>
                </Nav>
            </NavArea>
        </Header>
    )
}

export {
    HeaderComponent,
}