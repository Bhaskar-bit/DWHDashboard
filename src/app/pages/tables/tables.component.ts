import { Component, OnInit } from '@angular/core';

import { IncidentService } from './tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: 'tables.component.html'
})
export class TablesComponent implements OnInit {
  data: any;
  constructor(private incidentService: IncidentService) {}

  showIncidents() {
    this.incidentService.validateincidents().subscribe(successData => {
      const response = successData;
      this.data = response ['incidents'];
      console.log(this.data);
    }, errorData => {

    });
  }

  ngOnInit() {
    this.showIncidents();
  }
}
