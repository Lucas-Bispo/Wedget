import {Camera} from "phosphor-react"
import html2canvas from 'html2canvas'
import { Loading } from "../Loading";
import { useState } from "react";


interface ScreeshotButtonProps {
    onScreenshotTook: (screenshot:string) => void;
}




export function ScreenshotButton({onScreenshotTook} : ScreeshotButtonProps){

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)



    
   async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = await canvas.toDataURL('image/png');

        onScreenshotTook(base64image)
        setIsTakingScreenshot(false);
    }
    
    
    
    return(
        <button
            type="button"
                className="p-2 bg-zinc-800 rounded-md border-transparent houver:bg-zinc-700 transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                
             {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/>}

        </button>


    )
}