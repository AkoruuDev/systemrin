import { useParams } from "react-router-dom"
import { cards_content } from "../db"
import { Container, MainBox } from "../styles"
import { useEffect, useState } from "react"
import { Content } from "./ContentTypes"

function CardContent() {
    const {sysId} = useParams()
    const [content, setContent] = useState()

    useEffect(() => {
        setContent(getSys())

        function getSys() {
            
            for(let i=0; i< cards_content.length; i++) {
                if (sysId === cards_content[i].card_id.toString()) return(cards_content[i].content)
            }
        }
    } ,[sysId])

    if(content) {
        return (
            <Container>
                <MainBox>
                    {content.map((e, i) => {
                        return(
                            <Content e={e} key={i} />
                        )
                    })}
                </MainBox>
            </Container>
        )
    } else {
        return (
            <p>loading...</p>
        )
    }
}

export {
    CardContent,
}