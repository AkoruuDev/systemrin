import styled from "styled-components";

const Button_Standard = styled.div`
    padding: 20px 50px;
    margin: 20px 0;
    border-radius: 8px;
    background-color: #6d6d6d;
    border: 5px solid #6d6d6d;
    color: #ffbb1a;
    font-size: 32px;
    font-family: 'Julius Sans One', sans-serif;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.05);
        color: #6d6d6d;
        background-color: transparent;
        border-color: #ffbb1a;
    }
`

const Button_Hightlight = styled(Button_Standard)`
    background-color: #ffbb1a;
    border-color: #ffbb1a;

    color: #3d3d3d;

    &:hover {
        background-color: transparent;
        color: #ffbb1a;
    }
`

export {
    Button_Hightlight,
    Button_Standard
}