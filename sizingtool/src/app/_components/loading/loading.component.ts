import {Component, Input, OnInit} from '@angular/core';
import {LoadingService} from '../../_service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() name: string;
  private isVisible = false;

  constructor(private service: LoadingService) {
  }

  ngOnInit() {
    if (this.name) {
      this.service.registerInstance(this.name, this);
    }
  }

  ngOnDestrory() {
    if (this.name) {
      this.service.removeInstance(this.name, this);
    }
  }

  hide() {
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
  }

}
