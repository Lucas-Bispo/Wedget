import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import idealImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';


const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm (){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)



    return (
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col itens-center shodow-lg w-[calc(100vw-2rem)] md:w-auto"> 
        <header>
            <span className="text-xl leading-6">Deisxe seu Feedback</span>
        
            <CloseButton/>
        
        </header>

        {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
            
           { Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col intens-center gap-2 border-2 border-traparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        onClick={() => setFeedbackType(key as FeedbackType)}
                        type="button"
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                )
                })
            }

        </div>
        ) : (
            <p> hello wolrd</p>
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