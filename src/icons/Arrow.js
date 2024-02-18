import styled from "styled-components"

function Arrow() {
    return (
        <Component>
            <div></div>
            <div></div>
        </Component>
    )
}

export {
    Arrow,
}

const Component = styled.div`
    width: 40px;
    height: 15px;
    margin: 20px;

    display: flex;
    align-items: center;
    
    cursor: pointer;
    position: relative;

    & :nth-child(1) {
        width: 20px;
        height: 20px;
        border-left: 3px solid #ffbb00;
        border-bottom: 3px solid #ffbb00;
        rotate: 45deg;
        position: absolute;
    }

    & :nth-child(2) {
        width: 100%;
        border-bottom: 3px solid #ffbb00;
    }
`