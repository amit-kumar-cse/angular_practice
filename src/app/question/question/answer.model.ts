import { Prakruti } from './prakruti-type.model';

export class Answer {
    constructor(
        public id: number,
        public desc: string,
        public prakruti: Prakruti
    ) {

    }
}