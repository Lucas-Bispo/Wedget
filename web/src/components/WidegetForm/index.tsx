import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import idealImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEIA:{
        title: 'Ideia',
        image:{
            source: idealImageUrl,
            alt: 'Imagem de um lâmpada',
        },
    },
    OTHER:{
        title: 'Other',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm (){
    
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setfeedbackSent] = useState(false);

    function handleRestartFeeback() {
        setfeedbackSent(false)
        setFeedbackType(null);
    }
  
    return (
        <>
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">   
        
            if{ feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested = {handleRestartFeeback}
                
                />
            ) : (
           
            
                    ! (feedbackType) ? (
                        <FeedbackTypeStep onFeedbackTypeChanged = {setFeedbackType}/>
                    ) : 
                (
                    <FeedbackContentStep 
                    feedbackTypes = {feedbackType}
                    onFeedbackRestartRequested = {handleRestartFeeback}
                    onFeedbackSent= {() => setfeedbackSent(true)} />
                )
            )
                   
            <footer className="text-xs text-neutral-400"> 
            Feito com amor 
                <a className="underline underline-offset-2" href=""> Lucas Bispo </a>
            </footer>
        <div>
        </>
    )

   
}