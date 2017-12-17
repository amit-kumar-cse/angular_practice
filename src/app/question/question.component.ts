import { Component, OnInit, Input, Output, EventEmitter, Attribute } from '@angular/core';
import { Question } from '../shared/model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() questionData: Question;
  selectedAnswer: number;

  radioValueChanged(value) {
    this.selectedAnswer = value.value;
  }
}
