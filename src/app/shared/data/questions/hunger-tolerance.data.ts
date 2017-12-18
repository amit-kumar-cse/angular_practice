import { Prakruti } from '../../model/prakruti-type.model';
import { Answer } from '../../model/answer.model';
import { Question } from '../../model/question.model';

export const hungerTolerance = new Question(
    4,
    'Ability to tolerate hunger',
    [
        new Answer(
            1,
            'Sometimes good , sometimes poor',
            Prakruti.VATA
        ),
        new Answer(
            2,
            'Poor',
            Prakruti.VATA
        ),
        new Answer(
            3,
            'Can tolerate hunger',
            Prakruti.VATA
        )
    ]
);
