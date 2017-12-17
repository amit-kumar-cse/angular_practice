import { Answer } from './answer.model';

export class Question {
    constructor(
        public id: number,
        public desc: string,
        public answers: Answer[]
    ) {

    }
}
