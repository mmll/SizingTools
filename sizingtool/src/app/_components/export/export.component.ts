import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  @Input('exportData') exportData: Object;
  constructor() { }

  ngOnInit() {
  }

  exportFile(){
    console.log(this.exportData.toString());
  }
}
