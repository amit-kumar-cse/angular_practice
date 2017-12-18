import { Question } from '../model/question.model';

import { dailyActivites } from './questions/daily-activities.data';
import { excitement } from './questions/exceitement.data';
import { digesetion } from './questions/digestion.data';
import { hungerTolerance } from './questions/hunger-tolerance.data';
// import { } from './questions/';


export let questionList: Question[] = [
    dailyActivites,
    excitement,
    digesetion,
    hungerTolerance
];

