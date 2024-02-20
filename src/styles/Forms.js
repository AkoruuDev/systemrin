import styled from "styled-components";

const FormBox = styled.form`
    width: 100%;
    padding: 20px 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffbb1a12;
`

const InputBox = styled.div`
    margin: 14px 0;
    
    label {
        padding: 0 14px;
    }
`

const Input = styled.input`
    width: 100%;
    height: 52px;
    margin: 8px 0;
    padding: 0 14px;
    border-radius: 4px;
    font-size: 16px;
    border: transparent;
    ::placeholder {
        color: #aab7c4;
    }
`

const InputArea = styled.textarea`
    width: 100%;
    height: 165px;
    margin: 8px 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 16px;
    border: transparent;
    ::placeholder {
        color: #aab7c4;
    }

`

export {
    FormBox,
    InputBox,
    Input,
    InputArea
}