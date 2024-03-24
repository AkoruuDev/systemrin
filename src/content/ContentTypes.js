/* eslint-disable react/jsx-pascal-case */
import { LButton } from "../icons"
import { Button_Hightlight, Button_Standard, List, Paragraph, Quote, Subtitle, Table, TableContent, Title } from "../styles"

function Content({ e }) {
    if (e.type === 'title') return <Title>{e.content}</Title>
    if (e.type === 'paragraph') return <Paragraph>{e.content}</Paragraph>
    if (e.type === 'button_standard') return <a href={e.link} target="_blank" rel="noopener noreferrer"><Button_Standard>{e.content}</Button_Standard></a>
    if (e.type === 'button_hightlight') return <a href={e.link} target="_blank" rel="noopener noreferrer"><Button_Hightlight>{e.content}</Button_Hightlight></a>
    if (e.type === 'quote') return <Quote>{e.content}</Quote>
    if (e.type === 'subtitle') return <Subtitle>{e.content}</Subtitle>
    if (e.type === 'list') return <List><LButton /><Paragraph>{e.content}</Paragraph></List>
    if (e.type === 'table') return (
        <Table>
            {e.content.map((t, i) => {
                return (
                    <TableContent key={i}>
                        <div>
                            {
                                t.type === 'title' ?
                                t.content.map((c, i) => {
                                    return <h6 key={i}>{c}</h6>
                                }) : t.type === 'content' ?
                                t.content.map((c, i) => {
                                    return <p key={i}>{c}</p>
                                }) : <></>
                            }
                        </div>
                    </TableContent>
                )
            })}
        </Table>

    )
}

export {
    Content
}