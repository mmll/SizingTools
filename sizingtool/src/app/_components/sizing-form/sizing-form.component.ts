import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StaticConfig} from '../../static-config'

@Component({
  selector: 'app-sizing-form',
  templateUrl: './sizing-form.component.html',
  styleUrls: ['./sizing-form.component.css']
})
export class SizingFormComponent implements OnInit {
  sizingForm;
  config_ec_option;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    // this.sizingForm = formBuilder.group({
    //   ecs_model: new FormControl('', Validators.compose([Validators.required])),
    //   ec_option: new FormControl('', Validators.compose([Validators.required])),
    //   sys_number: new FormControl('', Validators.compose([Validators.required])),
    //   vdc_write_number: new FormControl('', Validators.compose([Validators.required])),
    //   vdc_number: new FormControl('', Validators.compose([Validators.required])),
    //   max_capacity: new FormControl('', Validators.compose([Validators.required])),
    //   average_object: new FormControl('', Validators.compose([Validators.required])),
    //   ingest_rate: new FormControl('', Validators.compose([Validators.required])),
    //   delete_rate: new FormControl('', Validators.compose([Validators.required])),
    // });
    let config = StaticConfig;
  }

  ngOnInit() {
    this.config_ec_option = StaticConfig.EC_OPTION;
    this.sizingForm = this.formBuilder.group({
      ecs_model: new FormControl('', Validators.compose([Validators.required])),
      ec_option: new FormControl('', Validators.compose([Validators.required])),
      sys_number: new FormControl('', Validators.compose([Validators.required])),
      vdc_write_number: new FormControl('', Validators.compose([Validators.required])),
      vdc_number: new FormControl('', Validators.compose([Validators.required])),
      max_capacity: new FormControl('', Validators.compose([Validators.required])),
      average_object: new FormControl('', Validators.compose([Validators.required])),
      ingest_rate: new FormControl('', Validators.compose([Validators.required])),
      delete_rate: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  onSubmit() {
    this.router.navigate(['/result'])
  }
}
