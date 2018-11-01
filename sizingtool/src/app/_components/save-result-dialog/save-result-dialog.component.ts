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
  resultSaveForm
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resultSaveForm = this.formBuilder.group({
      company_name: new FormControl("", Validators.compose([Validators.required]))
    })

  }
  close(){
    this.show = false;
  }
  onSubmit() {
    this.onOK.emit();
  }
}
