import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tables = [
    'Credit Curve Tenor', 'Credit Scenario Matrix', 'Equity Numeric', 'Equity Spot Vol',
    'Equity Tenor', 'Hierarchy', 'Instruments', 'Issuers', 'Position Risk Model'
  ];
  selectedTable = this.tables[0];

  onTableChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTable = target.value;
  }
}
