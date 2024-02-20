/* eslint-disable react/jsx-pascal-case */
import { Brick, Button_Standard, Icon, Paragraph, Paragraph_orange, Quote, Quote_orange, RowGrid, RowGrid_Space } from "../styles"

function Meet({ meet }) {

    if (meet.isOnline) {
        return(
            <a href={meet.link} target="_blank" rel="noreferrer">
                <Brick>
                    <Quote_orange>{meet.name}</Quote_orange>
                    <Paragraph_orange>{meet.chapter}</Paragraph_orange>
                    <RowGrid_Space>
                        <Paragraph>{meet.date}</Paragraph>
                        <Paragraph>{meet.hour}</Paragraph>
                    </RowGrid_Space>
                    <Button_Standard>
                        {meet.isThereLocal ?
                            <RowGrid>
                                <Icon src={require(`../assets/${meet.icon}`)} alt="icon" />
                                <Paragraph>{meet.local}</Paragraph>
                            </RowGrid> :
                            <Quote>Comming soon</Quote>
                        }
                    </Button_Standard>
                </Brick>
            </a>
    )} else {
        return (
            <a href={meet.link} target="_blank" rel="noreferrer">
                <Brick>
                    <Quote_orange>{meet.name}</Quote_orange>
                    <Paragraph_orange>{meet.chapter}</Paragraph_orange>
                    <RowGrid_Space>
                        <Paragraph>{meet.date}</Paragraph>
                        <Paragraph>{meet.hour}</Paragraph>
                    </RowGrid_Space>
                    <Button_Standard>
                        {meet.isThereLocal ?
                            <RowGrid>
                                <Icon src={require(`../assets/${meet.icon}`)} alt="icon" />
                                <Paragraph>{meet.local}</Paragraph>
                            </RowGrid> :
                            <Quote>Comming soon</Quote>
                        }
                    </Button_Standard>
                </Brick>
            </a>            
        )
    }
}

export {
    Meet,
}