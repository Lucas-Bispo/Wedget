import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import idealImageUrl from '../assets/ideia.svg';
import thoughtImageUrl from '../assets/thought.svg';


const feedbackTypes = {
    BUG:{
        title: 'problema',
        image:{
            source: '',
            alt: 'Imagem de um inseto',
        }
    },
    IDEIA:{
        title: 'ideia',
        image:{
            source: '',
            alt: 'Imagem de um lâmpada',
        }
    },
    OTHER:{
        title: 'other',
        image:{
            source: '',
            alt: 'Imagem de um balão de pensamento',
        }
    },
}



export function WidgetForm (){
    return (
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col itens-center shodow-lg w-[calc(100vw-2rem)] md:w-auto"> 
        <header>
            <span className="text-xl leading-6">Deisxe seu Feedback</span>
        
            <CloseButton/>
        
        </header>

        <div className="flex py-8 gap-2 w-full">


        </div>

        
        <p>

        </p>

        <footer className="text-xs text-neutral-400"> 
        Feito com amor 
        <a className="underline underline-offset-2" href=""> Lucas Bispo </a>
        </footer>
        
        </div>
    )
}