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
  constructor(private route: ActivatedRoute, private calculate: CalculateService) {
    this.route.queryParams.subscribe(param=>{
        this.input = param;
        this.result = this.calculate.getResult(param);
    })
  }

  ngOnInit() {
    this.capacityChart = echarts.init(document.getElementById('capacity-chart'));
    this.overheadChart = echarts.init(document.getElementById('overhead-chart'));
    this.rateChart = echarts.init(document.getElementById('rate-chart'));
    let option = {
      backgroundColor: '#ffffff',
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data:[
            {value:235, name:'视频广告'},
            {value:274, name:'联盟广告'},
            {value:310, name:'邮件营销'},
            {value:335, name:'直接访问'},
            {value:400, name:'搜索引擎'}
          ],
          roseType: 'angle',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(0, 0, 0, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.3)'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.capacityChart.setOption(option);
    this.overheadChart.setOption(option);
    this.rateChart.setOption(option);
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
