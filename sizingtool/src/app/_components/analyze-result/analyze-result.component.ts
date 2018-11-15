import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CalculateService} from "../../_service/calculate.service";
import {SaveResultDialogComponent} from "../save-result-dialog/save-result-dialog.component";
import {ChartConfig} from "../../config/chart.config"
const echarts = require('echarts');

@Component({
  selector: 'app-analyze-result',
  templateUrl: './analyze-result.component.html',
  styleUrls: ['./analyze-result.component.css']
})
export class AnalyzeResultComponent implements OnInit {
  @ViewChild(SaveResultDialogComponent) modal: SaveResultDialogComponent;
  capacityChart;
  result;
  input;
  exportData;
  diskData;
  constructor(private route: ActivatedRoute, private calculate: CalculateService) {
    this.route.queryParams.subscribe(param=>{
        this.result = param;
        // this.exportData = {
        //   input: this.input,
        //   result: this.result
        // }
    })
  }

  ngOnInit() {
    this.capacityChart = echarts.init(document.getElementById('capacity-chart'));
    let option = ChartConfig.capacityOption;
    option.series[0].data = this.result;
    this.capacityChart.setOption(option);
  }
  ngAfterViewInit():void{
    this.modal.onOK.subscribe($event=>{
      console.log($event.companyName);
      this.modal.close();
    });
  }
  colorMappingChange(value) {
    var levelOption = ChartConfig.getLevelOption();
    this.capacityChart.setOption({
      series: [{
        levels: levelOption
      }]
    });
  }

  ngOnDestroy(){
    echarts.dispose(document.getElementById('capacity-chart'));
  }

}
