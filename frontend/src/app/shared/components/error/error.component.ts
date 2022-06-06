import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input()
  formControlField?: FormControl;
  @Input()
  submitted = true;
  @Input()
  optionalParams: any;

  constructor() { }

  ngOnInit(): void {
  }
}
