import {ArrowLeft} from "phosphor-react";
import { FeedbackType,feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}


export function FeedbackContentStep ({
    feedbackType, 
    onFeedbackRestartRequested

}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];


    return(
        <>
        <header>
            <button 
            type="button" 
            className="top-5 left-5 absolute text-zinc-400 houver:text-zinc-100
            onClick={onFeedbackRestartRequested}
            ">
            
                <ArrowLeft weight="bold" className="w-4 h-4" />
            </button>


            <span className="text-xl leading-6 flex items-center gap-2">Deisxe seu Feedback
                <img src="{feedbackTypeInfo.image.source}" alt="feedbackTypeInfo.image.alt className= w-6 h-6" />
                {feedbackTypeInfo.title}
            </span>
        
            <CloseButton/>
        
        </header>

        <form className="my-4 w-full">
            <textarea className="min-width[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 tex-zinc-100 border-zinc-600 bg-transform rounded-md focus:border-500 focus:ring-brand-500 focus:right-1 focus:outline-none resize-none"
            placeholder="Conte copm detalhes o que está acontecendo..."
            >

            </textarea>
        </form>
        </>
    )
}