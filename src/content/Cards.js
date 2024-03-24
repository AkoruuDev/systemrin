import styled from "styled-components"
import { cards } from "../db"
import { useNavigate } from "react-router-dom"

function CardUnique({ e, type }) {
    const Navigate = useNavigate();
    if (e.type === type) {
        return (
            <div key={e.id}>
                <Card>
                    <Image src={e.imageUrl} alt='' />
                    <span onClick={() => Navigate(`/system/${e.id}`)}>See More</span>
                    <Info>
                        <Title>{e.title}</Title>
                        <Description>{e.description}</Description>
                        <Type color={e.type_box.color}>{e.type_box.name}</Type>
                    </Info>
                </Card>
            </div>
        );
    }
    return null;
}

function Cards({ type }) {
    return (
        <>
            {cards.map(e => (
                <CardUnique key={e.id} e={e} type={type}/>
            ))}
        </>
    )

}

export {
    Cards,
}

const Card = styled.div`
    width: 250px;
    height: 300px;
    margin: 10px;
    background-color: #666666;
    border-radius: 8px;

    position: relative;
    overflow: hidden;

    transition: all 0.2s ease;
    cursor: pointer;

    & span {
        width: 100%;
        height: 100%;
        background-color: #66666682;
        font-weight: 700;
        font-size: 36px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        opacity: 0;
        transition: all 0.2s ease;
    }

    &:hover {
        transform: scale(1.1);

        & span {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    width: 100%;
    padding: 15px 14px;
    background-color: #666666;

    position: absolute;
    bottom: 0;
    z-index: 1;
`

const Title = styled.h6`
    font-size: 13px;
`

const Description = styled.p`
    margin: 7px 0;
    color: #999999;
    font-size: 11px;
`

const Type = styled.div`
    padding: 4px 8px;
    color: white;
    background-color: ${props => props.color};
    border-radius: 4px;
    float: right;
    font-size: 12px;
`