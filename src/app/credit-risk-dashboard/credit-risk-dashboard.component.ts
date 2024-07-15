import { Component, OnChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-credit-risk-dashboard',
  templateUrl: './credit-risk-dashboard.component.html',
  styleUrls: ['./credit-risk-dashboard.component.css']
})
export class CreditRiskDashboardComponent implements OnChanges {
  @Input() selectedTable: string = ''; // Initialize with an empty string
  rowData: any[] = [];
  columnDefs: any[] = [];
  defaultColDef = { sortable: true, filter: true };

  constructor(private http: HttpClient) {}

  ngOnChanges() {
    if (this.selectedTable) {
      this.fetchTableData();
    }
  }

  fetchTableData() {
    this.http.get<any[]>(`http://localhost:3000/${this.selectedTable.replace(/ /g, '')}`).subscribe(data => {
      this.rowData = data;
      if (data.length > 0) {
        this.columnDefs = Object.keys(data[0]).map(key => ({ field: key }));
      }
    });
  }
}
