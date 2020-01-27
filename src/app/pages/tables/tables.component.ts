import { Component, OnInit } from '@angular/core';

import { IncidentService } from './tables.service';
import Chart from 'chart.js';

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
      this.data  = response ['incidents'];
      console.log(this.data);
    }, errorData => {

    });
  }

  ngOnInit() {
    this.showIncidents();
    new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["P1", "P2", "P3"],
        datasets: [
          {
            label: "End",
            backgroundColor: "#3e95cd",
            data: [133,221,783,2478]
          }, {
            label: "Start",
            backgroundColor: "#ffa500",
            data: [408,547,675,734]
          }
        ]
      },
      options: {
        title: {
          display: true,
        //  text: 'Population growth (millions)'
        },
        legend:{
          labels: {
              fontColor: "white",
              //fontSize: 18
           }
          }
      }
  });
 
  new Chart(document.getElementById("bar_incidents_1"), {
    type: 'bar',
    data: {
      labels: ["P1", "P2", "P3"],
      datasets: [
        {
          label: "SLA Met",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "SLA Exceeded",
          backgroundColor: "#ffa500",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
      //  text: 'Population growth (millions)'
      },
      legend:{
        labels: {
            fontColor: "white",
            //fontSize: 18
         }
        }
    }
});
new Chart(document.getElementById("bar_SLA_Analysis_incidents"), {
  type: 'bar',
  data: {
    labels: ["SLA Met", "SLA Exceeded"],
    datasets: [
      {
        label: "End",
        backgroundColor: "#3e95cd",
        data: [133,221,783,2478]
      }, {
        label: "Start",
        backgroundColor: "#ffa500",
        data: [408,547,675,734]
      }
    ]
  },
  options: {
    title: {
      display: true,
    //  text: 'Population growth (millions)'
    },
    legend:{
      labels: {
          fontColor: "white",
          //fontSize: 18
       }
      }
  }
});
 
new Chart(document.getElementById("barSummary_incidents"), {
  type: 'bar',
  data: {
    labels: ["Total"],
    datasets: [
      {
        label: "P1",
        backgroundColor: "#3e95cd",
        data: [133,221,783,2478]
      }, {
        label: "P2",
        backgroundColor: "#ffa500",
        data: [408,547,675,734]
      }, {
        label: "P3",
        backgroundColor: "#808080",
        data: [408,547,675,734]
      }
    ]
  },
  options: {
    title: {
      display: true,
    //  text: 'Population growth (millions)'
    },
    legend:{
      labels: {
          fontColor: "white",
          //fontSize: 18
       }
      }
}
}); 
  }
  
}
