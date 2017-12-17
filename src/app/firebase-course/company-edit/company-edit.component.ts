import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  // company$: AngularFireObject<{}>;

  constructor(private db: AngularFireDatabase) {
    // this.company$ = this.db.object(`company`);
  }

  ngOnInit() {
  }

}
