import { Prakruti } from '../model/prakruti-type.model';
import { Answer } from '../model/answer.model';
import { Question } from '../model/question.model';

export const questionData = new Question(
    1,
    'How you perform your daily activities?',
    [
        new Answer(
            1,
            'Quickly with a lot of initiative.',
            Prakruti.VATA
        ),
        new Answer(
            2,
            'Moderately medium initiative.',
            Prakruti.VATA
        ),
        new Answer(
            3,
            'Very slowly.',
            Prakruti.VATA
        )
    ]
);
