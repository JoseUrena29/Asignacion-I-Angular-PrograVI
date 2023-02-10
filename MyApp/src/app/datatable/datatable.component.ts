
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;

  constructor(private http: HttpClient){ }
  
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.http.get('https://hub.dummyapis.com/employee?noofRecords=20&idStarts=1')
    .subscribe((res: any) => {
      this.data = res.data;
    });

  }
  ngOnDestroy(): void {

  }
}
