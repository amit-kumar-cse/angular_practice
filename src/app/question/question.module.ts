import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule
} from '@angular/material';
// custom
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule
  ],
  declarations: [
    QuestionComponent,
    QuestionListComponent
  ],
  exports: [
    QuestionComponent,
    QuestionListComponent
  ]
})
export class QuestionModule { }
