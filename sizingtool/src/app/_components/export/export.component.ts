import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  @Input('exportData') exportData;
  constructor() { }

  ngOnInit() {
  }

  exportFile(){
    console.log(this.exportData.toString());
    let csv = 'Input\n';
    let input = this.exportData.input;
    let result = this.exportData.result;
    for (const [key, value] of Object.entries(input)) {
      csv += key + ',' + value + '\n';
    }
    csv += 'Result \n'
    for (const [key, value] of Object.entries(result)) {
      csv += key + ',' + value + '\n';
    }
    let hiddenElement = document.createElement('a');
    hiddenElement.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURI(csv));
    hiddenElement.setAttribute('target', "_blank");
    hiddenElement.setAttribute('download', 'Analysis Result.csv');
    hiddenElement.click();
  }
}
