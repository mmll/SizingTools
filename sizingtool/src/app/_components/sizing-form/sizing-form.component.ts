import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {StaticConfig} from '../../static-config'
import {SizingForm} from "../../_entity/sizing-form";

@Component({
  selector: 'app-sizing-form',
  templateUrl: './sizing-form.component.html',
  styleUrls: ['./sizing-form.component.css']
})
export class SizingFormComponent implements OnInit {
  sizingForm;
  ecs_model;
  config_ec_option;
  formEntity;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.formEntity = new SizingForm();
    this.config_ec_option = StaticConfig.EC_OPTION;
    this.ecs_model = StaticConfig.ECS_MODEL;
    this.sizingForm = this.formBuilder.group({
      ecs_model: new FormControl(this.formEntity.ecs_model, Validators.compose([Validators.required])),
      ec_option: new FormControl(this.formEntity.ec_option, Validators.compose([Validators.required])),
      sys_number: new FormControl(this.formEntity.sys_number, Validators.compose([Validators.required, Validators.min(0)])),
      vdc_write_number: new FormControl(this.formEntity.vdc_write_number, Validators.compose([Validators.required, Validators.min(0)])),
      vdc_number: new FormControl(this.formEntity.vdc_write_number, Validators.compose([Validators.required, Validators.min(0)])),
      max_capacity: new FormControl(this.formEntity.max_capacity, Validators.compose([Validators.required, Validators.min(0)])),
      average_object: new FormControl(this.formEntity.average_object, Validators.compose([Validators.required, Validators.min(0)])),
      ingest_rate: new FormControl(this.formEntity.ingest_rate, Validators.compose([Validators.required, Validators.min(0)])),
      delete_rate: new FormControl(this.formEntity.delete_rate, Validators.compose([Validators.required, Validators.min(0)])),
    });
  }
  resetForm(){
    this.sizingForm.reset();
    return false;
  }
  onSubmit() {
    let navigationExtras: NavigationExtras = {
      queryParams: this.formEntity,
      }
    ;

    this.router.navigate(['/result'], navigationExtras)
  }
}
