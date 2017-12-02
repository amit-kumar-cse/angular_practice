import { Component } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lodashConfigTest() {
    _.defaults({ 'a': 1 });
  }
}
