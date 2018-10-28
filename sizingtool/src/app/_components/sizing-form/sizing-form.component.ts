import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sizing-form',
  templateUrl: './sizing-form.component.html',
  styleUrls: ['./sizing-form.component.css']
})
export class SizingFormComponent implements OnInit {
  sizingForm;

  constructor(private formBuilder: FormBuilder) {
    this.sizingForm = formBuilder.group({
      ecs_model: new FormControl('', Validators.compose([Validators.required])),
      ec_option: new FormControl('', Validators.compose([Validators.required])),
      sys_number: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
  }

}
