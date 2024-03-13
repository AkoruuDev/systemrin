import styled from "styled-components"

function Pen() {
    return(
        <IPen>
            <div></div>
            <div></div>
            <div></div>
        </IPen>
    )
}

export {
    Pen,
}

const IPen = styled.div`
    width: 6px;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    :nth-child(1) {
        width: 100%;
        height: 20%;
        border-radius: 1px 1px 0 0;
        margin-bottom: 1px;
        background-color: #fff;
    }

    :nth-child(2) {
        width: 100%;
        height: 60%;
        background-color: #fff;
    }

    :nth-child(3) {
        width: 0;
        height: 0;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 4px solid #fff;
    }
`