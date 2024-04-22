/* eslint-disable react/jsx-pascal-case */
import { LButton } from "../icons"
import { Button_Hightlight, Button_Standard, List, Paragraph, Quote, Subtitle, Table, TableContent, Title } from "../styles"

function Content({ e }) {
    if (e.type === 'title') {
        if (e.link === '') {
            return (
                <Title side={e.side} size={e.size} color={e.color}>
                    {e.content}
                </Title>)
        } else {
            return (
                <a href={e.link} target="_blank">
                    <Title side={e.side} size={e.size} color={e.color}>
                        {e.content}
                    </Title>
                </a>)
        }
    }
    if (e.type === 'subtitle') {
        if (e.link === '') {
            return (
                <Subtitle side={e.side} size={e.size} color={e.color}>
                    {e.content}
                </Subtitle>)
        } else {
            return (
                <a href={e.link} target="_blank">
                    <Subtitle side={e.side} size={e.size} color={e.color}>
                        {e.content}
                    </Subtitle>
                </a>)
        }
    }
    if (e.type === 'paragraph') {
        if (e.link === '') {
            return (
                <Paragraph side={e.side} size={e.size} color={e.color}>
                    {e.content}
                </Paragraph>)
        } else {
            return (
                <a href={e.link} target="_blank">
                    <Paragraph side={e.side} size={e.size} color={e.color}>
                        {e.content}
                    </Paragraph>
                </a>)
        }
    }
    if (e.type === 'button_standard') return <a href={e.link} target="_blank" rel="noopener noreferrer"><Button_Standard>{e.content}</Button_Standard></a>
    if (e.type === 'button_hightlight') return <a href={e.link} target="_blank" rel="noopener noreferrer"><Button_Hightlight>{e.content}</Button_Hightlight></a>
    if (e.type === 'quote') {
        if (e.link === '') {
            return (
                <Quote side={e.side} size={e.size} color={e.color}>
                    {e.content}
                </Quote>)
        } else {
            return (
                <a href={e.link} target="_blank">
                    <Quote side={e.side} size={e.size} color={e.color}>
                        {e.content}
                    </Quote>
                </a>)
        }
    }
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
    if (e.type === 'link') return (<></>);
}

/*
    > title
    subtitle
    paragraph
    button
    quote
    list
    table
    link


    |      type      |      color      |      size      |      side      |      link      |

    {
        type: '',
        content: '',
        color: '',
        size: '',
        side: '', // left, center, right
        link: '',
    }
*/

export {
    Content
}