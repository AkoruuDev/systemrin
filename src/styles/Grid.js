import styled from "styled-components";

const RowGrid = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const RowGrid_Space = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CollumGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 14px;
`

export {
    RowGrid,
    RowGrid_Space,
    CollumGrid
}