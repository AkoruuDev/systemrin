import styled from "styled-components";

const Container = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #0f0f0f;
    color: #ffbc1a;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
    overflow-y: auto;

    
    &::-webkit-scrollbar {
        width: 8px;
        background-color: #ffffff82;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ffbb00;
        border-radius: 50px;
    }
`

export {
    Container,
}