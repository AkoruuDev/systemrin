import styled from "styled-components";

const Table = styled.div`
    margin: 50px;
    padding: 20px;
    border-radius: 14px;
    background-color: #7e7e7e;

    display: flex;
    flex-direction: column;
    justify-content: center;



    & :nth-child(1) {
        border-top: none;
    }
`

const TableContent = styled.div`
    margin: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    & div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ffbb00;

        & h6, p {
            min-width: 160px;
        }
    }

    & h6 {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 12px;
    }

    & p {
        padding: 12px 25px;
    }
`

export {
    Table,
    TableContent
}