import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-save-result-dialog',
  templateUrl: './save-result-dialog.component.html',
  styleUrls: ['./save-result-dialog.component.css']
})
export class SaveResultDialogComponent implements OnInit {
  @Output() onOK: EventEmitter<any> = new EventEmitter<any>();
  show = false;
  resultSaveForm;
  companyName: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resultSaveForm = this.formBuilder.group({
      company_name: new FormControl(this.companyName, Validators.compose([Validators.required]))
    })

  }
  close(){
    this.show = false;
  }
  open(){
    this.show = true;
  }
  onSubmit() {
    this.onOK.emit({companyName:this.companyName});
  }
}
