import styled from "styled-components"

function LButton() {
    return (
        <Component>
            <span></span>
        </Component>
    )
}

export {
    LButton,
}

const Component = styled.div`
    width: 40px;
    height: 15px;
    margin: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    position: relative;

    & :nth-child(1) {
        width: 10px;
        height: 10px;
        background-color: #ffbb00;
        rotate: 45deg;
        position: absolute;
    }
`