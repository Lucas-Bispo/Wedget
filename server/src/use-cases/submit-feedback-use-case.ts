import { MailAdapter } from "../adapters/mail-adapters";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
    type:string;
    comment:string;
    screenshot?: string;

}


export class SubmitFeedbackUseCase{
    constructor(
        private feedbackRepository: PrismaFeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}

    async execute(request:SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request;


        await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        })


        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [ 
                `<div style="font-fammily: sans-serif; font-size: 16px; color: #111">`,
              `<p> Tipo do Feedback: ${type}</p>`,
              `<p> Tipo do Feedback: ${comment}</p>`,
              `</div>`
          ].join('\n')
            
        })
    }
}