import styled from "styled-components"

function Space() {
    return (
        <Bar>
            <Retangle></Retangle>
        </Bar>
    )
}

export {
    Space,
}

const Bar = styled.div`
    width: 35vw;
    height: 1px;
    margin: 25px 0;
    border: 2px solid #ffbb00;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Retangle = styled.div`
    width: 15px;
    height: 15px;
    background-color: #ffbb00;
    rotate: 45deg;
`