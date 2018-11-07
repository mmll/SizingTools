import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CalculateService} from "../../_service/calculate.service";
import {SaveResultDialogComponent} from "../save-result-dialog/save-result-dialog.component";
const echarts = require('echarts');

@Component({
  selector: 'app-analyze-result',
  templateUrl: './analyze-result.component.html',
  styleUrls: ['./analyze-result.component.css']
})
export class AnalyzeResultComponent implements OnInit {
  @ViewChild(SaveResultDialogComponent) modal: SaveResultDialogComponent;
  capacityChart;
  overheadChart;
  rateChart;
  result;
  input;
  exportData
  constructor(private route: ActivatedRoute, private calculate: CalculateService) {
    this.route.queryParams.subscribe(param=>{
        this.input = param;
        this.result = this.calculate.getResult(param);
        this.exportData = {
          input: this.input,
          result: this.result
        }
    })
  }

  ngOnInit() {
    this.capacityChart = echarts.init(document.getElementById('capacity-chart'));
    this.overheadChart = echarts.init(document.getElementById('overhead-chart'));
    this.rateChart = echarts.init(document.getElementById('rate-chart'));

    let option = {
      angleAxis: {
      },
      radiusAxis: {
        type: 'category',
        data: ['Usable Capacity', 'Net Data Capacity', 'Effective Capacity','Raw Capacity'],
        z: 50
      },
      polar: {
      },
      tooltip:{
        show: true,
      },
      series: [{
        type: 'bar',
        data: [2567,2300,2310,6985],
        coordinateSystem: 'polar',
        stack: 'a'
      }]
    };
    let chartOption = {
      series: [{
        type: 'treemap',
        data: [{
          name: 'nodeA',            // First tree
          value: 10,
          children: [{
            name: 'nodeAa',       // First leaf of first tree
            value: 4
          }, {
            name: 'nodeAb',       // Second leaf of first tree
            value: 6
          }]
        }, {
          name: 'nodeB',            // Second tree
          value: 20,
          children: [{
            name: 'nodeBa',       // Son of first tree
            value: 20,
            children: [{
              name: 'nodeBa1',  // Granson of first tree
              value: 20
            }]
          }]
        }]
      }]
    };
    this.capacityChart.setOption(option);
    this.overheadChart.setOption(chartOption);
    //this.rateChart.setOption(option);
  }
  ngAfterViewInit():void{
    this.modal.onOK.subscribe($event=>{
      console.log($event.companyName);
      this.modal.close();
    });
  }
  ngOnDestroy(){
    echarts.dispose(document.getElementById('capacity-chart'));
    echarts.dispose(document.getElementById('overhead-chart'));
    echarts.dispose(document.getElementById('rate-chart'));
  }

}
