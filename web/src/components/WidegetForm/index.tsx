import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import idealImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG:{
        title: 'problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEIA:{
        title: 'ideia',
        image:{
            source: idealImageUrl,
            alt: 'Imagem de um lâmpada',
        },
    },
    OTHER:{
        title: 'other',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm (){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)



    return (
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shodow-lg w-[calc(100vw-2rem)] md:w-auto"> 
        

        {!feedbackType ? (
            <FeedbackTypeStep  onFeedbackTypeChanged = {setFeedbackType} />
        ) : (
            <FeedbackContentStep feedbackType = {feedbackType}/>
        )
    }


        
        <p>

        </p>

        <footer className="text-xs text-neutral-400"> 
        Feito com amor 
        <a className="underline underline-offset-2" href=""> Lucas Bispo </a>
        </footer>
        
        </div>
    )
}