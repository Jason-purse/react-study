import TableControl from './TabControl'
import {useState} from "react";

export default function Index() {

    const [titles, setTitles] = useState(['流行', 'POP', '爵士'])
    const [index, setIndex] = useState(0)
    return (
        <>
            <TableControl titles={titles} currentIndex={index} setIndex={setIndex} />
            <h1>
                {titles[index]}
            </h1>
        </>
    )
}