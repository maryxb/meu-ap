import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-captacao',
  templateUrl: './form-captacao.component.html',
  styleUrls: ['./form-captacao.component.less']
})
export class FormCaptacaoComponent implements OnInit {

  title = "Título";
  selectedValue: string = "";
  items = [
    { value: "0", view: "zero" },
    { value: "1", view: "one" },
    { value: "2", view: "Two" }
  ];
  constructor() { }

  ngOnInit() {
  }
}