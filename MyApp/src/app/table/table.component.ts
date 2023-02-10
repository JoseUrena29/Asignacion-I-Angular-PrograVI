import { Component, Input } from '@angular/core';
import { Table } from 'src/model/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()
  table!: Table;
}

