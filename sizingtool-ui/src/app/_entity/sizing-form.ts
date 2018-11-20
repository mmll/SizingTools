import {FormControl, Validators} from "@angular/forms";

export class SizingForm {
  private _ecs_model: string;
  private _ec_option: string;
  private _sys_number: number;
  private _vdc_write_number: number;
  private _vdc_number: number;
  private _max_capacity: number;
  private _average_object: number;
  private _ingest_rate: number;
  private _delete_rate: number;

  set ecs_model(value: string) {
    this._ecs_model = value;
  }

  set ec_option(value: string) {
    this._ec_option = value;
  }

  set sys_number(value: number) {
    this._sys_number = value;
  }

  set vdc_write_number(value: number) {
    this._vdc_write_number = value;
  }

  set vdc_number(value: number) {
    this._vdc_number = value;
  }

  set max_capacity(value: number) {
    this._max_capacity = value;
  }

  set average_object(value: number) {
    this._average_object = value;
  }

  set ingest_rate(value: number) {
    this._ingest_rate = value;
  }

  set delete_rate(value: number) {
    this._delete_rate = value;
  }

  // constructor(_ecs_model, _ec_option, _sys_number, _vdc_write_number, _vdc_number, _max_capacity, _average_object, _ingest_rate,_delete_rate) {
  //   this._ecs_model = _ecs_model;
  //   this._ec_option = _ec_option;
  //   this._sys_number = _sys_number;
  //   this._vdc_write_number = _vdc_write_number;
  //   this._vdc_number = _vdc_number;
  //   this._max_capacity = _max_capacity;
  //   this._average_object = _average_object;
  //   this._ingest_rate = _ingest_rate;
  //   this._delete_rate = _delete_rate;
  // }

  constructor() {

  }


  get ecs_model(): string {
    return this._ecs_model;
  }

  get ec_option(): string {
    return this._ec_option;
  }

  get sys_number(): number {
    return this._sys_number;
  }

  get vdc_write_number(): number {
    return this._vdc_write_number;
  }

  get vdc_number(): number {
    return this._vdc_number;
  }

  get max_capacity(): number {
    return this._max_capacity;
  }

  get average_object(): number {
    return this._average_object;
  }

  get ingest_rate(): number {
    return this._ingest_rate;
  }

  get delete_rate(): number {
    return this._delete_rate;
  }

}

