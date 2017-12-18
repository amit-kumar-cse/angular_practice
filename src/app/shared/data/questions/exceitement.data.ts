import { Prakruti } from '../../model/prakruti-type.model';
import { Answer } from '../../model/answer.model';
import { Question } from '../../model/question.model';

export const excitement = new Question(
    2,
    'Tell about your excitement when you are happy',
    [
        new Answer(
            1,
            'Quick',
            Prakruti.VATA
        ),
        new Answer(
            2,
            'Very Quick',
            Prakruti.VATA
        ),
        new Answer(
            3,
            'Slowly',
            Prakruti.VATA
        )
    ]
);
