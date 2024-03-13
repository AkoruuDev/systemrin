import styled from "styled-components"

function GetXP({ xpLevel, userXp }) {
    const size = 250
    const xpPerLevel = size / xpLevel
    const completed = userXp * xpPerLevel
    const stock = size - completed

    return (
        <BarProgress size={size}>
            <XpCompleted prog={completed.toString()}></XpCompleted>
            <XpIncompleted stock={stock.toString()}></XpIncompleted>
        </BarProgress>
    )
}

const BarProgress = styled.div`
    width: ${props => props.size}px;
    height: 26px;
    display: flex;
    align-items: center;
    border: transparent;
    border-radius: 8px;
    overflow: hidden;
    background-color: #888888;
`

const XpCompleted = styled.div`
    height: 100%;
    width: ${props => props.prog}px;
    background: #2e9100;    
    border-radius: 8px 0 0 8px;
`

const XpIncompleted = styled(XpCompleted)`
    background-color: #453837;
    width: ${props => props.stock}px;
    float: right;
    border-radius: 0 8px 8px 0;
`

export {
    GetXP,
}