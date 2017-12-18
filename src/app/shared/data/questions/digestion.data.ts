import { Prakruti } from '../../model/prakruti-type.model';
import { Answer } from '../../model/answer.model';
import { Question } from '../../model/question.model';

export const digesetion = new Question(
    3,
    'How is your digestive capacity',
    [
        new Answer(
            1,
            'Sometimes very good , sometimes cant eat much',
            Prakruti.VATA
        ),
        new Answer(
            2,
            'Very good',
            Prakruti.VATA
        ),
        new Answer(
            3,
            'Less appetite',
            Prakruti.VATA
        )
    ]
);
