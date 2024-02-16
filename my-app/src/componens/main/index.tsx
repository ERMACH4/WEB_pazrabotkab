import { useContext } from "react"
import { Button } from "../button"
import { LanguageContext } from "../../App"

export const Main = () =>{
    const {language} = useContext(LanguageContext)
    return (
        <div>
        <Button text="{translation(language, 'start')}"/>
        <Button text="{translation(language, 'pause')}"/>
        <Button text="{translation(language, 'changeMode')}"/>
        <Button text="{translation(language, 'closeMode')}"/>
        </div>
    )
}