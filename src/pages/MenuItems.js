import { Container, MainBox, RowGrid } from "../styles";

function MenuItems({ children }) {
    return (
        <Container>
            <MainBox><RowGrid>{children}</RowGrid></MainBox>
        </Container>
    )
}

export {
    MenuItems,
}