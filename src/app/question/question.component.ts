import { Component, OnInit } from '@angular/core';
import { questionData } from './question.data';
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questionData: Question;
  selectedAnswer: number;
  constructor() {
    this.questionData = questionData;
  }

  ngOnInit() {
  }

}
