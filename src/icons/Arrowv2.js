import styled from "styled-components"

function Arrowv2top() {
    return (
        <ComponentTop>
            <div></div>
        </ComponentTop>
    )
}

function Arrowv2Bot() {
    return (
        <ComponentBot>
            <div></div>
        </ComponentBot>
    )
}

export {
    Arrowv2top,
    Arrowv2Bot
}

const ComponentTop = styled.div`
    width: 40px;
    height: 40px;
    margin: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    position: relative;

    & :nth-child(1) {
        width: 20px;
        height: 20px;
        border-left: 3px solid #ffbb00;
        border-bottom: 3px solid #ffbb00;
        rotate: -45deg;
        position: absolute;
    }
`

const ComponentBot = styled(ComponentTop)`
    & :nth-child(1) {
        rotate: 135deg;
    }
`