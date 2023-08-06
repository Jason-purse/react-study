import {useContext} from "react";
import ThemeContext from "../ThemeContext";
export default function Index(props) {
    const context = useContext(ThemeContext);
    console.log("context " + context)
    return (
        <div>
           颜色如下:  {context}
        </div>
    )
}